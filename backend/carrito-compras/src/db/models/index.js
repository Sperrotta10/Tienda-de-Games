const { User, UserSchema } = require('./user_model');
const { Carrito, CarritoSchema } = require('./carrito-compras_model');
const { ItemCarrito, ItemCarritoSchema } = require('./items_model');



function setupModels(sequelize) {
  // Inicializar los modelos
  User.init(UserSchema, User.config(sequelize));
  Carrito.init(CarritoSchema, Carrito.config(sequelize));
  ItemCarrito.init(ItemCarritoSchema, ItemCarrito.config(sequelize));

  console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",sequelize.models); // Ver qué modelos están disponibles


  // Definir asociaciones después de inicializar los modelos
  Carrito.associate(sequelize.models);
  ItemCarrito.associate(sequelize.models);
}

module.exports = { setupModels };

