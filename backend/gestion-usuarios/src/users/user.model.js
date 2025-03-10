import { getConnection } from '../database.js';
import bcrypt from "bcryptjs";
import { SALT_ROUNDS } from '../config.js';

export class UsersModel {

    static async getAll() {
        try {
            const [users] = await getConnection().query('SELECT username, email FROM usersTable');
            return users;
        } catch (err) {
            throw new Error('Error al obtener los usuarios: ' + err.message);
        }
    }

    static async get({ id }) {
        try {
            const [user] = await getConnection().query('SELECT username, email FROM usersTable WHERE id = ?', [id]);
            return user;
        } catch (err) {
            throw new Error('Error al obtener el usuario: ' + err.message);
        }
    }

    static async create({ data }) {
        const {
            username,
            email,
            password
        } = data
        if (!username || !email || !password) {
            throw new Error('Se requiere nombre de usuario, email y contraseña para crear un usuario.');
        }
        try {
            const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS));
            let query = 'INSERT INTO usersTable (username, email, password) VALUES (?, ?, ?)';
            const [user] = await getConnection().query(query, [username, email, hashedPassword]);
            const [newUser] = await getConnection().query('SELECT id, username, email FROM usersTable WHERE email = ?', [email]);
            return newUser;
        }
        catch (err) {
            throw new Error('Error al crear el usuario: ' + err.message);
        }
    }

    static async changePassword({ dataPassword }, { id }) {
        const {
            currrentPassword,
            newPassword
        } = dataPassword;
        try {
            const [user] = await getConnection().query('SELECT password FROM usersTable WHERE id = ?', [id]);

            if (!user[0]) {
                throw new Error("No se ha encontrado ningún usuario con el ID dado.");
            }
            const match = await bcrypt.compare(currrentPassword, user[0].password);

            if (!match) {
                throw new Error("La contraseña actual es incorrecta.")
            };

            const hashedPassword = await bcrypt.hash(newPassword, parseInt(SALT_ROUNDS));
            const query = 'UPDATE usersTable SET password = ? WHERE id = ?';
            await getConnection().query(query, [hashedPassword, id]);
        }
        catch (err) {
            console.log(err);
            throw new Error('Error al cambiar la contraseña: ' + err.message);
        }
    }

    static async delete() {
        // TO-DO
    }

    static async disable() {
        // TO-DO
    }

    static async enable() {
        // TO-DO
    }

}