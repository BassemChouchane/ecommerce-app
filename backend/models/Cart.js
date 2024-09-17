// cartModel.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userID: { type: String , ref: 'User', required: true },
  cartID: { type: String, required: false },
  cartItems: [{
    id: String,
    title: String,
    quantity: Number,
    price: Number,
    imageUrl: String
  }]
});

module.exports = mongoose.model('Cart', cartSchema);
