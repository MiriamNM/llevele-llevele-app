const Sequelize = require("sequelize");
const db = require("../util/database");

const Product = db.define("product", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quality: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sku: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
});

module.exports = Product;
