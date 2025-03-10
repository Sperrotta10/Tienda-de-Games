const express = require('express');

const CarritoService = require('./../services/carrito-compras_service');
const validatorHandler = require('./../middlewares/validator_handler');
const {
  getCarritoSchema,
  createCarritoSchema,
  addItemSchema,
} = require('./../schemas/carrito-compras_schema');

const service = new CarritoService();

const router = express.Router();

router.get('/:usuarioId', async (req, res, next) => {
  try {
    const { usuarioId } = req.params;
    const carrito = await service.findByUserId(usuarioId);
    res.json(carrito);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
