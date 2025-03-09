const Joi = require('joi');

const id = Joi.number().integer();
const userId = Joi.number().integer();
const juegoId = Joi.number().integer().min(1); // Asegura que sea un ID válido
const amount = Joi.number().integer().min(1);

const getCarritoSchema = Joi.object({
  id: id.required(),
});

const createCarritoSchema = Joi.object({
  userId: userId.required(),
});

const addItemSchema = Joi.object({
  juegoId: juegoId.required(),
  amount: amount.required(),
});

module.exports = { getCarritoSchema, createCarritoSchema, addItemSchema };
