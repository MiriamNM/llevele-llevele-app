const Product = require("../models/products");

const handleResponse = (res, result) => {
  if (result instanceof Error) {
    return res.status(500).json({ error: result.message });
  }
  return res.status(200).json(result);
};

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Product.findAll();
    handleResponse(res, ALL);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const products = await Product.findByPk(req.params.id);
    handleResponse(res, products);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const PRODUCT_MODEL = {
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      quality: req.body.quality,
      sku: req.body.sku,
    };

    const product = await Product.create(PRODUCT_MODEL);
    handleResponse(res, product);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const PRODUCT_MODEL = {
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      price: req.body.price,
      quality: req.body.quality,
      sku: req.body.sku,
    };

    const [updatedRows] = await Product.update(PRODUCT_MODEL, {
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
    const deletedRows = await Product.destroy({ where: { id: req.params.id } });
    if (deletedRows === 0) {
      return handleResponse(res, new Error("Producto no encontrado"));
    }
    handleResponse(res, { message: "Producto eliminado exitosamente" });
  } catch (error) {
    handleResponse(res, error);
  }
};