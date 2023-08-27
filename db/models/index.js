const { Vendor, VendorSchema } = require('./vendor.modal');
const { Product, ProductSchema } = require('./product.modal');

function setupModels(sequelize) {
  Vendor.init(VendorSchema, Vendor.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
