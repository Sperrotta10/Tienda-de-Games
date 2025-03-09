const mongoose = require('mongoose');

const requisitosSistemaSchema = new mongoose.Schema(
    {
    sistema_operativo: { type: String, required: true },
    procesador: { type: String, required: true },
    memoria: { type: String, required: true },
    graficos: { type: String, required: true },
    almacenamiento: { type: String, required: true },
    },
    { _id: false }
);

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
    enlace_trailer: { type: String, required: true},
    portada: { type: String, required: true}
});

gameSchemas.set('toJSON', {
    transform: function (doc, ret) {
      // Define el orden de los campos
      return {
        _id: ret._id,
        titulo: ret.titulo,
        genero: ret.genero,
        desarrollador: ret.desarrollador,
        editor: ret.editor,
        fecha_lanzamiento: ret.fecha_lanzamiento,
        precio: ret.precio,
        plataformas: ret.plataformas,
        descripcion: ret.descripcion,
        requisitos_sistema: {
          minimos: ret.requisitos_sistema.minimos,
          recomendados: ret.requisitos_sistema.recomendados,
        },
        idiomas_disponibles: ret.idiomas_disponibles,
        clasificacion_edad: ret.clasificacion_edad,
        multijugador: ret.multijugador,
        cooperativo: ret.cooperativo,
        enlace_trailer: ret.enlace_trailer,
        portada: ret.portada,
      };
    },
  });

// creamos nuestro modelo y lo exportamos
const Game = mongoose.model("Game", gameSchemas);
module.exports = {Game};