// routes/productRoutes.js
const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

// @route   GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    // Map products to include id instead of _id
    const formattedProducts = products.map(product => ({
      id: product._id,
      ...product._doc, // Spread the other fields
    }));
    res.json(formattedProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route   GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Format product to include id instead of _id
    const formattedProduct = {
      id: product._id,
      ...product._doc,
    };
    res.json(formattedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
