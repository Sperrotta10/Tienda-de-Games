import { UsersModel } from "./user.model.js"
import { validate, validatePassword } from "./validation.js";

export class UsersController {
    getAll = async (req, res) => {
        try {
            const users = await UsersModel.getAll();
            res.status(200).json(users);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al obtener los usuarios:' });
        }
    }

    get = async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UsersModel.get({ id });
            res.status(200).json(user);
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ error: 'Error al obtener el usuario:' });
        }
    }

    create = async (req, res) => {
        const result = validate(req.body);
        if (!result.success) {
            return res.status(400).json({ error: 'Datos inválidos: ' + result.error });
        }
        const data = result.data;
        try {
            const user = await UsersModel.create({ data });
            res.status(201).json(user);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al crear el usuario:' });
        }
    }

    changePassword = async (req, res) => {
        const { id } = req.params;
        const result = validatePassword(req.body);
        if (!result.success) {
            return res.status(400).json({ error: 'Datos inválidos: ' + result.error });
        }
        const dataPassword = result.data;
        try {
            await UsersModel.changePassword({ dataPassword }, { id });
            res.status(200).json({ message: "Contraseña cambiada exitosamente." });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al cambiar la contraseña.' });
        }
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