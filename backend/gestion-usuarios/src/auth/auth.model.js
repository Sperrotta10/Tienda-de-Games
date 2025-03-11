import { getConnection } from '../database.js';
import crypto from 'crypto';

export class AuthModel {
    static async findRefreshToken({ refreshToken }) {
        const hashedToken = crypto.createHash('sha256').update(refreshToken).digest('hex');
        try {
            const [rows] = await getConnection().query('SELECT * FROM refreshTokens WHERE token = ? AND expiresAt > NOW()', [hashedToken]);
            return rows[0];
        } catch (err) {
            throw new Error('Error al buscar el refreshToken: ' + err.message);
        }
    }
    
    static async storeRefreshToken({ userId, refreshToken }) {
        const hashedToken = crypto.createHash('sha256').update(refreshToken).digest('hex');
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 días
        try {
            const query = 'INSERT INTO refreshTokens (userId, token, expiresAt, createdAt) VALUES (?, ?, ?, NOW())';
            await getConnection().query(query, [userId, hashedToken, expiresAt]);
        } catch (err) {
            throw new Error('Error al guardar el refreshToken: ' + err.message);
        }
    }

    static async deleteRefreshTokensByUserId({ userId }) {
        try {
            await getConnection().query('DELETE FROM refreshTokens WHERE userId = ?', [userId]);
        } catch (err) {
            throw new Error('Error al eliminar los refreshTokens del usuario: ' + err.message);
        }
    }
}