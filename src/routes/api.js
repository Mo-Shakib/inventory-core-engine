const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

// Product Routes
router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);

// Order Routes
router.post('/orders', orderController.createOrder);

module.exports = router;