// models/productModel.js
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, required: true },
  cpu: { type: String, required: true },
  gpu: { type: String, required: true },
  ram: { type: String, required: true },
  color: { type: String, required: true },
  series: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
