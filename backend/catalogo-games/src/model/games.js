const {Game} = require('../schema/games')


class GamesModel {
    
    static async create(newGame) {
        try {
            
            const result = await Game.create(newGame);
            return result;

        } catch (error) {
            
            throw new Error("Error al crear Juego", error.message);
            
        }
    }

    static async update(id_game,update_game) {

        try {
            
            const result = await Game.findByIdAndUpdate(id_game, update_game, {new: true});
            return result;

        } catch (error) {
            
            throw new Error("Error al actualizar Juego", error.message);
            
        }
    }

    static async delete(id_game) {
        try {
            
            const result = await Game.findByIdAndDelete(id_game);
            return result;

        } catch (error) {
            
            throw new Error("Error al eliminar Juego", error.message);
            
        }
    }

    static async deleteName(nameGame) {
        try {
            
            const result = await Game.findOneAndDelete({titulo : nameGame});
            return result;

        } catch (error) {
            
            throw new Error("Error al eliminar Juego", error.message);
            
        }
    }

    static async deleteAll() {
        try {
            
            const result = await Game.deleteMany({});
            return result;

        } catch (error) {
            
            throw new Error("Error al eliminar Juego", error.message);
            
        }
    }

    static async getAll() {

        try {
            
            const result = await Game.find();
            return result;

        } catch (error) {
            
            throw new Error("Error al obtener Juegos", error.message);
            
        }
    }

    static async getById(id_game) {

        try {
            
            const result = await Game.findById(id_game);
            return result;

        } catch (error) {
            
            throw new Error("Error al obtener Juego por id", error.message);
            
        }
    }

    static async getName(nameGame) {

        try {
            
            const result = await Game.findOne({titulo : nameGame});
            return result;

        } catch (error) {
            
            throw new Error("Error al obtener Juego por el nombre", error.message);
            
        }
    }
}

module.exports = {GamesModel};