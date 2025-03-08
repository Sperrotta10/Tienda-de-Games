const mongoose = require('mongoose');

const requisitosSistemaSchema = new mongoose.Schema({
    sistema_operativo: { type: String, required: true },
    procesador: { type: String, required: true },
    memoria: { type: String, required: true },
    graficos: { type: String, required: true },
    almacenamiento: { type: String, required: true },
});

const gameSchemas = new mongoose.Schema({
    titulo: { type: String, required: true },
    genero: { type: String, required: true },
    desarrollador: { type: String, required: true },
    editor: { type: String, required: true },
    fecha_lanzamiento: { type: String, required: true },
    precio: { type: Number, required: true, min: 0 },
    plataformas: [{ type: String, required: true }],
    descripcion: { type: String, required: true },
    requisitos_sistema: {
        minimos: requisitosSistemaSchema,
        recomendados: requisitosSistemaSchema
    },
    idiomas_disponibles: [{ type: String, required: true }],
    clasificacion_edad: { type: String, required: true },
    multijugador: { type: Boolean, required: true },
    cooperativo: { type: Boolean, required: true },
    enlace_trailer: { type: String, required: true, match: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ },
    portada: { type: String, required: true, match: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ }
});

// creamos nuestro modelo y lo exportamos
const Game = mongoose.model("Game", gameSchemas);
module.exports = {Game};