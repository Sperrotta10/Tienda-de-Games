const express = require('express');
const {create_game, delete_game, delete_gameName, update_game, obtener_game, obtener_gameID, obtener_gameName} = require('../controller/games')

const routes = () => {

    // creamos el enrutador
    const routes = express.Router();

    //api para crear juegos
    routes.post('/create-game', create_game)

    // api para eliminar juegos por su id
    routes.delete('/delete-game/:id_game', delete_game)

    // api para eliminar juegos por su nombre
    routes.delete('/delete-game/:nameGame', delete_gameName)

    // api para actualizar juegos
    routes.put('/update-game', update_game)

    // api para obtener juegos
    routes.get('get-games', obtener_game)

    // api para obtener juegos por id
    routes.get('get-games/:id_game', obtener_gameID)

    // api para obtener juegos por nombre
    routes.get('get-games/:nameGame', obtener_gameName)
}