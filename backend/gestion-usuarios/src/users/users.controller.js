import { UsersModel } from "./user.model.js"

export class UsersController {
    getAll = async (req, res) => {
        try {
            const users = await UsersModel.getAll();
            res.status(200).json(users);
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ error: 'Error al obtener los usuarios:' });
        }
    }

    get = async (req, res) => {
        // TO-DO
    }

    create = async (req, res) => {
        // TO-DO
    }

    changePassword = async (req, res) => {
        // TO-DO
    }

    delete = async (req, res) => {
        // TO-DO
    }

    disable = async (req, res) => {
        // TO-DO
    }

    enable = async (req, res) => {
        // TO-DO
    }

}