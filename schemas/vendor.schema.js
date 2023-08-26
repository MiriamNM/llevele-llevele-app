const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);

const createVendorSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const updateVendorSchema = Joi.object({
  email: email,
});

const getVendorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createVendorSchema, updateVendorSchema, getVendorSchema };
