const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);

const createVendorSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

const updateVendorSchema = Joi.object({
  email: email,
  role: role,
});

const getVendorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createVendorSchema, updateVendorSchema, getVendorSchema };
