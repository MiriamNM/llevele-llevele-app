'use strict';

const { VendorSchema, VENDOR_TABLE } = require('../models/vendor.modal');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(VENDOR_TABLE, VendorSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(VENDOR_TABLE);
  },
};
