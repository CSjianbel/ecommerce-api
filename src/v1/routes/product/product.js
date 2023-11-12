const { ProductController } =require('../../controllers');

const express = require('express');
const router = express.Router();

router.route('/').post(ProductController.createProduct);
router.route('/').get(ProductController.getProducts);
router.route('/:id').get(ProductController.getProductById);
router.route('/:id').put(ProductController.updateProduct);
router.route('/:id').delete(ProductController.deleteProduct);

module.exports = router;