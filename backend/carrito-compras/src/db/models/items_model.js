const { Model, DataTypes, Sequelize } = require('sequelize');

const ITEMS_CARRITO_TABLE = 'items_carrito';

const ItemCarritoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  usuario_id: { // Se relaciona con usuario_id del carrito
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: 'carrito_compras',
      key: 'usuario_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  juego_id: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  titulo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  precio_unitario: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
};

class ItemCarrito extends Model {
  static associate(models) {
    this.belongsTo(models.Carrito, {
      foreignKey: 'usuario_id',
      as: 'carrito'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ITEMS_CARRITO_TABLE,
      modelName: 'ItemCarrito',
      timestamps: false,
    };
  }
}

module.exports = { ITEMS_CARRITO_TABLE, ItemCarritoSchema, ItemCarrito };
