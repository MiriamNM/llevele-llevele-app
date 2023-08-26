const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class VendorService {
  constructor() {}

  async create(data) {
    const newVendor = await models.Vendor.create(data);
    return newVendor;
  }

  async findOne(id) {
    const vendor = await models.Vendor.findByPk(id);
    if (!vendor) {
      throw boom.notFound('Vendor not found');
    }
    return vendor;
  }

  async update(id, changes) {
    const vendor = await this.findOne(id);
    const rta = await vendor.update(changes);
    return rta;
  }

  async delete(id) {
    const vendor = await this.findOne(id);
    await vendor.destroy();
    return { id };
  }
}

module.exports = VendorService;
