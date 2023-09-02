const Products = require("../models/produts");

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Products.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const PRODUCT_MODEL = {
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
    };

    try {
      const product = await User.create(PRODUCT_MODEL);
      console.log("user created");
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const PRODUCT_MODEL = {
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
    };

    try {
      const product = await User.update(PRODUCT_MODEL, {
        where: { id: req.params.id },
      });
      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json(err);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const product = await User.destroy({ where: { id: req.params.id } });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
};