const mongoose = require('mongoose');

// Esquema para los ítems del pedido (juegos comprados)
const itemPedidoSchema = new mongoose.Schema(
    {
    juegoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Juego', required: true },
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
  },
  {_id: false}
);
  
// Esquema principal para el pedido
const pedidoSchema = new mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    items: [itemPedidoSchema], 
    precioTotal: { type: Number, required: true },
    estado: {
        type: String,
        required: true,
        enum: ['pendiente', 'completado', 'cancelado'],
        default: 'pendiente', // Estado por defecto
    },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
});

// Personalizar la salida JSON
pedidoSchema.set('toJSON', {
    transform: function (doc, ret) {
      return {
        _id: ret._id,
        usuarioId: ret.usuarioId,
        items: ret.items.map(item => ({
          juegoId: item.juegoId,
          titulo: item.titulo,
          precio: item.precio,
        })),
        precioTotal: ret.precioTotal,
        estado: ret.estado,
        fechaCreacion: ret.fechaCreacion,
        fechaActualizacion: ret.fechaActualizacion,
      };
    },
});

const Pedido = mongoose.model('Pedido', pedidoSchema);
module.exports = {Pedido}

