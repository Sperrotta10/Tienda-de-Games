const Joi = require('joi');

const usuarioId = Joi.string().required();
const total = Joi.number().min(0).required();

const getCarritoSchema = Joi.object({
  usuarioId, // Se obtiene el carrito con el ID del usuario
});

const createCarritoSchema = Joi.object({
  usuarioId, // Se crea un carrito con el usuario asociado
  total, // Se inicializa con total = 0
});

module.exports = { getCarritoSchema, createCarritoSchema };
