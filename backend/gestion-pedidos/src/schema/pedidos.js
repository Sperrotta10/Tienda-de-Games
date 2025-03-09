const mongoose = require('mongoose');

// Esquema para los ítems del pedido (juegos comprados)
const itemPedidoSchema = new mongoose.Schema({
    juegoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Juego', required: true },
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true, min: 1 },
  });
  
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

const Pedido = mongoose.model('Pedido', pedidoSchema);
module.exports = {Pedido}

