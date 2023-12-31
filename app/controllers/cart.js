const Cart = require("../models/cart");

const handleResponse = (res, result) => {
  if (result instanceof Error) {
    return res.status(500).json({ error: result.message });
  }
  return res.status(200).json(result);
};

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Cart.findAll();
    handleResponse(res, ALL);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const products = await Cart.findByPk(req.params.id);
    handleResponse(res, products);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const CART_MODEL = {
      name: req.body?.name,
      description: req.body?.description,
      price: req.body?.price,
      quality: req.body?.quality,
    };

    const product = await Cart.create(CART_MODEL);
    handleResponse(res, product);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const CART_MODEL = {
      name: req.body?.name,
      description: req.body?.description,
      price: req.body?.price,
      quality: req.body?.quality,
    };

    const [updatedRows] = await Cart.update(CART_MODEL, {
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
    const deletedRows = await Cart.destroy({ where: { id: req.params.id } });
    if (deletedRows === 0) {
      return handleResponse(res, new Error("Producto no encontrado"));
    }
    handleResponse(res, { message: "Producto eliminado exitosamente" });
  } catch (error) {
    handleResponse(res, error);
  }
};