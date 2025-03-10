const Joi = require('joi');

const usuarioId = Joi.string().required();
const juegoId = Joi.string().required();
const titulo = Joi.string().required();
const precioUnitario = Joi.number().min(0).required();

const addItemSchema = Joi.object({
  usuarioId, // Identifica a quién pertenece el carrito
  juegoId, // Identifica el juego
  titulo, // Se guarda el nombre del juego
  precioUnitario, // Se guarda el precio del juego
});

const removeItemSchema = Joi.object({
  usuarioId,
  juegoId, // Solo se necesita usuarioId y juegoId para eliminar
});

module.exports = { addItemSchema, removeItemSchema };
