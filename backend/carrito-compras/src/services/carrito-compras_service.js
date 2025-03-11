const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CarritoService {
  constructor() {}

  async create(usuarioId) {
    // Verifica si el usuario ya tiene un carrito
    const carritoExistente = await models.Carrito.findByPk(usuarioId);
    if (carritoExistente) {
      throw boom.conflict('El usuario ya tiene un carrito');
    }

    const newCarrito = await models.Carrito.create({ usuario_id: usuarioId, total: 0 });
    return newCarrito;
  }

  async findByUserId(usuarioId) {
    let carrito = await models.Carrito.findOne({
      where: { usuario_id: usuarioId },
      include: [{
        model: models.ItemCarrito,
        as: 'items',
      }],
    });

    if (!carrito) {
      // Si no existe, lo creamos automáticamente
        carrito = await models.Carrito.create({
          usuario_id: usuarioId,
          total: 0,
        });
      }
    carrito = await this.updateTotal(usuarioId);
    return carrito;
  }

  async updateTotal(usuarioId) {
    // 🔹 Buscar el carrito asociado al usuario
    const carrito = await models.Carrito.findOne({
      where: { usuario_id: usuarioId }
    });

    if (!carrito) {
      throw boom.notFound('Carrito no encontrado');
    }

    const items = await models.ItemCarrito.findAll({ where: { usuario_id: usuarioId } });

    // 🔹 Calcular el total sumando el precio de los juegos
    const total = items.reduce((sum, item) => sum + item.precio_unitario, 0);

    // 🔹 Actualizar el total en la base de datos
    await carrito.update({ total });

    return carrito;
  }


  async deleteItems(usuarioId) {
    const items = await models.ItemCarrito.destroy({ where: { usuario_id: usuarioId } });
    return items;
  }
}

module.exports = CarritoService;
