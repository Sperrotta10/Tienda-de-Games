const express = require('express');

const CarritoService = require('./../services/carrito-compras_service');
const ItemsService = require('./../services/items_service');
const validatorHandler = require('./../middlewares/validator_handler');
const {
  getCarritoSchema,
  createCarritoSchema,
} = require('./../schemas/carrito-compras_schema');

const {
  addItemSchema,
  removeItemSchema,
  getItemSchema,
} = require('./../schemas/items_schema');

const carritoService = new CarritoService();
const itemsService = new ItemsService();

const router = express.Router();

// Metodos de carrito

router.get('/:usuarioId',
  validatorHandler(getCarritoSchema, 'params'),
  async (req, res, next) => {
  try {
    const { usuarioId } = req.params;
    const carrito = await carritoService.findByUserId(usuarioId);
    res.json(carrito);
  } catch (error) {
    next(error);
  }
});

router.delete('/:usuarioId', async (req, res, next) => {
  try {
    const { usuarioId } = req.params;
    const response = await carritoService.deleteItems(usuarioId);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

// Metodos de items

// Agregar un ítem al carrito de un usuario
router.post('/:usuarioId/items',
  validatorHandler(getCarritoSchema, 'params'), // Validar usuarioId
  validatorHandler(addItemSchema, 'body'), // Validar los datos del ítem
  async (req, res, next) => {
    try {
      const { usuarioId } = req.params;
      const newItem = await itemsService.addItem(usuarioId, req.body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:usuario_id/items/:juego_id',
  validatorHandler(getItemSchema, 'params'), // Valida ambos params
  async (req, res, next) => {
    try {
      const { usuario_id, juego_id } = req.params;
      const item = await itemsService.getItem(juego_id, usuario_id, req.body);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:usuario_id/items/:juego_id',
  validatorHandler(getItemSchema, 'params'), // Valida ambos params
  async (req, res, next) => {
    try {
      const { usuario_id, juego_id } = req.params;
      res.status(201).json(await itemsService.removeItem(juego_id, usuario_id, req.body));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
