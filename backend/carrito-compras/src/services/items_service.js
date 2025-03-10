const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const CarritoService = require('./carrito_service');

class ItemsService {
  constructor() {
    this.carritoService = new CarritoService();
  }

  async addItem(usuarioId, data) {
    // Verifica si el carrito del usuario existe
    await this.carritoService.findOne(usuarioId);

    // Verifica si el juego ya está en el carrito
    const itemExistente = await models.ItemCarrito.findOne({
      where: { usuario_id: usuarioId, juego_id: data.juego_id },
    });

    if (itemExistente) {
      throw boom.conflict('El juego ya está en el carrito');
    }

    // Agrega el juego al carrito
    const newItem = await models.ItemCarrito.create({ ...data, usuario_id: usuarioId });

    // Actualiza el total del carrito
    await this.carritoService.updateTotal(usuarioId);

    return newItem;
  }

  async removeItem(usuarioId, juegoId) {
    // Verifica si el carrito del usuario existe
    await this.carritoService.findOne(usuarioId);

    // Busca el item en el carrito
    const item = await models.ItemCarrito.findOne({
      where: { usuario_id: usuarioId, juego_id: juegoId },
    });

    if (!item) {
      throw boom.notFound('Juego no encontrado en el carrito');
    }

    // Elimina el juego del carrito
    await item.destroy();

    // Actualiza el total del carrito
    await this.carritoService.updateTotal(usuarioId);

    return { mensaje: 'Juego eliminado del carrito' };
  }
}

module.exports = ItemsService;
