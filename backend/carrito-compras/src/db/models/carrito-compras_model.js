const { Model, DataTypes, Sequelize } = require('sequelize');

const CARRITO_TABLE = 'carrito_compras';

const CarritoSchema = {
  usuario_id: {
    allowNull: false,
    primaryKey: true, // Un usuario solo tiene un carrito
    type: DataTypes.STRING, // Identificador del usuario sin FK
  },
  total: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class Carrito extends Model {
  static associate(models) {
    this.hasMany(models.ItemCarrito, {
      as: 'itemCarritos', // Este alias debe coincidir con el include en findByUserId
      foreignKey: 'usuario_id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CARRITO_TABLE,
      modelName: 'Carrito',
      timestamps: false,
    };
  }
}

module.exports = { CARRITO_TABLE, CarritoSchema, Carrito };
