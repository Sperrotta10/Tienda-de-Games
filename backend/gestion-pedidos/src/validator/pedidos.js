const zod = require('zod');

// Definir el esquema de validación con Zod
const pedidoSchemaZod = zod.object({

    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    items: zod.array(zod.object({

        juegoId: zod.string().min(1, "El ID del juego es requerido"),
        titulo: zod.string().min(1, "El titulo es requerido"),
        precio: zod.number().min(0, "El precio no puede ser negativo"),

    }), ).nonempty("El pedido debe tener al menos un ítem"),
    precioTotal: zod.number().min(0, "El precio no puede ser negativo"),
    estado: zod.enum(['pendiente', 'completado', 'cancelado'], {
        required_error: "El estado es requerido",
        invalid_type_error: "El estado debe ser 'pendiente', 'completado' o 'cancelado'",
    }),
    fechaCreacion: zod.date().optional(),
    fechaActualizacion: zod.date().optional(), 

});

// funcion para validar lo datos cuando queremos crear un juego
function validationPedidos(pedido) {
        
    const dataValidate = pedidoSchemaZod.parse(pedido);

    return { success: true, data: dataValidate };
}

// funcion para validar los datos cunado queremos actualizar juegos
function validationPedidosUpdate(pedido) {

    const dataValidate = pedidoSchemaZod.partial().parse(pedido);

    return { success: true, data: dataValidate };
}

module.exports = {validationPedidos, validationPedidossUpdate}