const Products = require("../models/produts");

const handleResponse = (res, result) => {
  if (result instanceof Error) {
    return res.status(500).json({ error: result.message });
  }
  return res.status(200).json(result);
};

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Products.findAll();
    handleResponse(res, ALL);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.id);
    handleResponse(res, product);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const PRODUCT_MODEL = {
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
    };

    const product = await Products.create(PRODUCT_MODEL);
    handleResponse(res, product);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const PRODUCT_MODEL = {
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
    };

    const [updatedRows] = await Products.update(PRODUCT_MODEL, {
      where: { id: req.params.id },
    });
    if (updatedRows === 0) {
      return handleResponse(res, new Error("Producto no encontrado"));
    }

    handleResponse(res, { message: "Producto actualizado exitosamente" });
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const deletedRows = await Products.destroy({ where: { id: req.params.id } });
    if (deletedRows === 0) {
      return handleResponse(res, new Error("Producto no encontrado"));
    }
    handleResponse(res, { message: "Producto eliminado exitosamente" });
  } catch (error) {
    handleResponse(res, error);
  }
};