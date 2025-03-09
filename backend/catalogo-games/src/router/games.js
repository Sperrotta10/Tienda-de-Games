const express = require('express');
const {create_game, delete_game, delete_gameName, update_game, obtener_game, obtener_gameID, obtener_gameName} = require('../controller/games')

// TEMPORAL
const {validationGames} = require('../validator/games') // temporal
const {Game} = require('../schema/games') // temporal
const fs = require('fs');
const path = require('path');

// Cargar el archivo JSON (TEMPORAL)
const gamesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'catalogo.json'), 'utf-8')
);

const routes = () => {

    // creamos el enrutador
    const routes = express.Router();

    // ruta temporal solo para agregar todo el catalogo de juegos
    routes.post('/createAllGames', async (req, res) => {

        try {
            // Validar los datos con Zod
            const validatedGames = gamesData.map(game => {
                const result = validationGames(game);
                if (!result.success) {
                    throw new Error(`Datos no válidos: ${JSON.stringify(result.error)}`);
                }
                return result.data; // Devuelve solo los datos validados
            });
    
            // Insertar los juegos en la base de datos
            const result = await Game.insertMany(validatedGames);
            res.status(201).json({message: "Juegos agregados correctamente"})
        } catch (error) {
            console.error('Error al insertar los juegos:', error);
            res.status(500).json({message: "Error al insertar juegos", error})
        }
    })

    //api para crear juegos
    routes.post('/create-game', create_game)

    // api para eliminar juegos por su id
    routes.delete('/delete-game/:id_game', delete_game)

    // api para eliminar juegos por su nombre
    routes.delete('/delete-game/:nameGame', delete_gameName)

    // api para actualizar juegos
    routes.put('/update-game', update_game)

    // api para obtener juegos
    routes.get('/get-games', obtener_game)

    // api para obtener juegos por id
    routes.get('/get-games/:id_game', obtener_gameID)

    // api para obtener juegos por nombre
    routes.get('/get-games/:nameGame', obtener_gameName)

    return routes;
}

module.exports = routes;