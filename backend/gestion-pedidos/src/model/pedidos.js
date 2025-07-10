const {Pedido} = require('../schema/pedidos')

class PedidoModel {

    static async create(newPedido) {

        try {
            
            const result = await Pedido.create(newPedido);
            return result;
            
        } catch (error) {
            
            throw new error("Error al crear el pedido", error.message);
        }
    }

    static async getAll() {

        try {

            const result = await Pedido.find();
            return result;
            
        } catch (error) {
            throw new Error("Error al obtener el pedidos");
            
        }
    }

    static async getById(id_pedido) {

        try {
            
            const result = await Pedido.findById(id_pedido)
            return result;

        } catch (error) {
            throw new Error("Error al obtener pedido por id");
            
        }
    }

    static async getByUserId(id_user) {

        try {

            const result = await Pedido.findOne({usuarioId: id_user});
            return result;

        } catch (error) {
            throw new Error("Error al obtener pedido por id del usuario");
            
        }
    }
}

module.exports = {PedidoModel};