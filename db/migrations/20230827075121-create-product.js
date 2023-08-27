'use strict';

const { PRODUCT_TABLE, ProductSchema } = require('../models/product.modal');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
