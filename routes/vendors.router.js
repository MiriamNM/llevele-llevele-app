const express = require('express');

const VendorService = require('../services/vendor.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  updateUserSchema,
  createUserSchema,
  getUserSchema,
} = require('../schemas/vendor.schema');

const router = express.Router();
const service = new VendorService();

router.get('/', async (req, res, next) => {
  try {
    const vendors = await service.find();
    res.json(vendors);
  } catch (error) {
    next(error);
  }
});

// router.get(
//   '/:id',
//   validatorHandler(getUserSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const category = await service.findOne(id);
//       res.json(category);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
