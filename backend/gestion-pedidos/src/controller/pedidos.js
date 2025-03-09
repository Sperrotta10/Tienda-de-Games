const { response } = require('express');
const {PedidoModel} = require('../model/pedidos');
const {validationPedidos, validationPedidosUpdate} = require('../validator/pedidos')

const create_pedido = async (req, res) => {

    const response = validationPedidos(req.body);

    if(!response.success) {
        return res.status(400).json({message: "Datos del pedido no valido"})
    }

    try {

        const newPedido = await PedidoModel.create(response.data)
        return res.status(201).json({data: newPedido, message: "Pedido creado exitosamente"})
        
    } catch (error) {
        console.error("Error al crear pedidos", error)
        res.status(500).json({message: error.message})
    }

}

const obtener_pedido = async (req, res) => {

    try {
        
        const obtenerPedido = await PedidoModel.getAll();
        return res.status(200).json({data: obtenerPedido, message: "Pedidos obtenido exitosamente"})

    } catch (error) {
        console.error("Error al obtener pedidos", error)
        res.status(500).json({message: error.message})
    }

}

const obtener_pedidoID = async (req, res) => {

    const {id_pedido} = req.params;

    try {
        
        const obtenerPedido = await PedidoModel.getById(id_pedido);
        return res.status(200).json({data: obtenerPedido, message: "Pedido obtenido exitosamente"})
        
    } catch (error) {
        console.error("Error al obtener pedido por id", error)
        res.status(500).json({message: error.message})
    }
}

const obtener_pedidoUserID = async (req, res) => {

    const {id_user} = req.params;

    try {
        
        const obtenerPedido = await PedidoModel.getByUserId(id_user);
        return res.status(200).json({data: obtenerPedido, message: "Pedido obtenido exitosamente"})
        
    } catch (error) {
        console.error("Error al obtener pedido por userId", error)
        res.status(500).json({message: error.message})
    }
}

module.exports = {create_pedido, obtener_pedido, obtener_pedidoID, obtener_pedidoUserID}