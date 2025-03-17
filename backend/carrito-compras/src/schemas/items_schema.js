const Joi = require('joi');
const { get } = require('../router/carrito-compras_router');

const usuario_id = Joi.string().required();
const item_id = Joi.string().required();
const juego_id = Joi.string().required();
const titulo = Joi.string().required();
const precio_unitario = Joi.number().min(0).required();

const addItemSchema = Joi.object({
  juego_id, // Identifica el juego
  titulo, // Se guarda el nombre del juego
  precio_unitario, // Se guarda el precio del juego
});

const removeItemSchema = Joi.object({
  item_id, // Solo se necesita usuario_id y item_id para eliminar
});

const getItemSchema = Joi.object({
  usuario_id,
  item_id,
});

module.exports = { addItemSchema, removeItemSchema, getItemSchema };
