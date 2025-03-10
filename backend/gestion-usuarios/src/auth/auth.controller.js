import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import crypto from 'crypto';
import { ACCESS_SECRET_KEY } from "../config.js";
import { AuthModel } from './auth.model.js';
import { UsersModel } from '../users/user.model.js';
import { validate } from './validation.js';

export class AuthController {
    refresh = async (req, res) => {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(401).json({ message: 'RefreshToken no proporcionado' });
        }

        try {
            const refreshTokenDB = await AuthModel.findRefreshToken({ refreshToken });

            if (!refreshTokenDB) {
                return res.status(403).json({ message: 'RefreshToken inválido' });
            }

            jwt.verify(refreshToken, ACCESS_SECRET_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json({ message: 'RefreshToken inválido' });
                }

                const accessToken = jwt.sign(
                    {
                        userId: user.userId,
                    },
                    ACCESS_SECRET_KEY,
                    {
                        expiresIn: "12h"
                    }
                );
                return res.json({ accessToken });
            });
        } catch (error) {
            console.error('Error al refrescar el token:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    login = async (req, res) => {
        const result = validate(req.body);
        if (!result.success) {
            return res.status(400).json({ error: 'Datos inválidos: ' + result.error });
        }
        const { email, password } = result.data;

        try {
            const user = await UsersModel.getByEmail({ email });

            if (!user) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            const accessToken = jwt.sign(
                {
                    userId: user.id,
                },
                ACCESS_SECRET_KEY,
                {
                    expiresIn: "12h"
                }
            );

            const refreshToken = crypto.randomBytes(64).toString('hex');
            await AuthModel.deleteRefreshTokensByUserId({ userId: user.id }); //elimina refresh tokens previos
            await AuthModel.storeRefreshToken({ userId: user.id, refreshToken });

            return res.json({ accessToken, refreshToken });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    verifyToken = async (req, res) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

        if (!token) {
            return res.status(401).json({ message: 'Token no encontrado' });
        }

        jwt.verify(token, ACCESS_SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }
            return res.json({ message: 'Token válido', user });
        });
    };

}