import { getConnection } from '../database.js';

export class UsersModel {

    static async getAll() {
        try {
            const [rows] = await getConnection().query('SELECT * FROM usersTable');
            return rows;
        } catch (err) {
            throw new Error('Error al obtener los usuarios: ' + err.message);
        }
    }

    async get() {
        // TO-DO
    }

    async create() {
        // TO-DO
    }

    async changePassword() {
        // TO-DO
    }

    async delete() {
        // TO-DO
    }

    async disable() {
        // TO-DO
    }

    async enable() {
        // TO-DO
    }

}