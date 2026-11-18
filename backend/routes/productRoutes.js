const express = require('express');
const { createProduct,  getAllProducts, getFeaturedProducts } = require('../controllers/productController');
const router = express.Router();

// const {
//   createProduct,
//   getProduct,
// } = require('../controllers/productController');

router.post('/product', createProduct);
router.get('/products', getAllProducts);
router.get('/products/featured', getFeaturedProducts);

module.exports = router;