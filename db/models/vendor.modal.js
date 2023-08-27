const { Model, DataTypes, Sequelize } = require('sequelize');

const VENDOR_TABLE = 'vendors';

const VendorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Vendor extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: VENDOR_TABLE,
      modelName: 'Vendor',
      timestamps: false,
    };
  }
}

module.exports = { VENDOR_TABLE, VendorSchema, Vendor };
