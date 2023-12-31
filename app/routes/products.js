const controller = require('../controllers/products');
const router = require('express').Router();

router
    .get('/', controller.getAll)
    .get('/:id', controller.getOne)
    .post('/', controller.createOne)
    .put('/:id', controller.updateOne)
    .delete('/:id', controller.deleteOne)

module.exports = router;