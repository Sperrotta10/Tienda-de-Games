const {GamesModel} = require('../model/games');
const {validationGames, validationGamesUpdate} = require('../validator/games')

<<<<<<< HEAD
// Controlador solo para (administrador)
=======
// controlador solo para (administrador)
>>>>>>> origin/testeo
const create_game = async (req,res) => {
    
    const response = validationGames(req.body);

    if (!response.success) {
        return res.status(400).json({ message: "Datos del juego no válidos", errors: response.error });
    }

    try {

        const newGame = await GamesModel.create(response.data)
        return res.status(201).json({data: newGame, message: "Juego creado exitosamente"});

    } catch (error) {

        console.error("Error al crear juego", error)
        res.status(500).json({message : error.message})
    }
}

// controlador solo para (administrador)
const update_game = async (req,res) => {

    const response = validationGamesUpdate(req.body);
    const {id_game} = req.params;

    if (!response.success) {
        return res.status(400).json({ message: "Datos par aactualizar juego no válidos", errors: response.error });
    }

    try {

        const updateGame = await GamesModel.update(id_game,response.data)
        return res.status(200).json({data: updateGame, message: "Juego actualizado exitosamente"});

    } catch (error) {
        
        console.error("Error al actualizar juego por su id", error)
        res.status(500).json({message : error.message})
    }
}

// controlador solo para (administrador)
const delete_game = async (req,res) => {
    
    const {id_game} = req.params;

    try {

        const deleteGame = await GamesModel.delete(id_game)
        return res.status(200).json({data: deleteGame, message: "Juego eliminado exitosamente"});

    } catch (error) {
        
        console.error("Error al eliminar juego por su id", error)
        res.status(500).json({message : error.message})
    }
}

// controlador solo para (administrador)
const delete_gameName = async (req,res) => {
    
    const {nameGame} = req.params;

    try {

        const deleteGame = await GamesModel.deleteName(nameGame)
        return res.status(200).json({data: deleteGame, message: "Juego eliminado exitosamente"});

    } catch (error) {
        
        console.error("Error al eliminar juego por su nombre", error)
        res.status(500).json({message : error.message})
    }
}

// controlador solo para (administrador)
const delete_AllGame = async (req,res) => {

    try {

        const deleteGame = await GamesModel.deleteAll()
        return res.status(200).json({data: deleteGame, message: "Juegos eliminados exitosamente"});

    } catch (error) {
        
        console.error("Error al eliminar los juegos", error)
        res.status(500).json({message : error.message})
    }
}


// controladores para cualquier usuario pero que este autentificado

const obtener_game = async (req,res) => {

    try {

        const getAllGame = await GamesModel.getAll()
        return res.status(200).json({data : getAllGame, message : "Juegos obtenidos exitosamente"});

    } catch (error) {
        
        console.error("Error al obtener juegos", error)
        res.status(500).json({message : error.message})
    }
}


const obtener_gameID = async (req,res) => {

    const {id_game} = req.params;

    try {

        const getById = await GamesModel.getById(id_game)
        return res.status(200).json({data: getById, message: "Juego obtenido exitosamente"});

    } catch (error) {
        
        console.error("Error al obtener juego por su id", error)
        res.status(500).json({message : error.message})
    }
}

const obtener_gameName = async (req,res) => {

    const {nameGame} = req.params;

    try {

        const getNameGame = await GamesModel.getName(nameGame)
        return res.status(200).json({data: getNameGame, message: "Juego obtenido exitosamente"});

    } catch (error) {
        
        console.error("Error al obtener juego por su nombre", error)
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    create_game, update_game, delete_game, delete_gameName, delete_AllGame, obtener_game, obtener_gameID, obtener_gameName
}



