const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const authenticate = require('../middleware/authMiddleware');

// Retrieve cart by userId or cartId (guest)
router.get('/:id', async (req, res) => {
  const { id } = req.params; // id can be userId or cartId
  try {
    const cart = await Cart.findOne({ $or: [{ userID: id }, { cartID: id }] });
    if (cart) {
      res.status(200).json({ cartItems: cart.cartItems });
    } else {
      res.status(200).json({ cartItems: [] });
    }
  } catch (error) {
    console.error('Error retrieving cart:', error); // Enhanced logging
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:id', async (req, res) => {
    const { id } = req.params; // id can be userId or cartId
    const { cartItems } = req.body;
  
    // Validate request data
    if (!Array.isArray(cartItems)) {
      return res.status(400).json({ message: 'Invalid cart items data' });
    }
  
    try {
      let cart = await Cart.findOne({ $or: [{ userID: id }, { cartID: id }] });
  
      if (cart) {
        // Update existing cart
        cart.cartItems = cartItems;
      } else {
        // Create a new cart
        const newCart = { cartItems };
        if (req.user) {
          // If authenticated, set userID
          newCart.userID = req.user.userID;
        } else {
          // If guest, set cartID
          newCart.cartID = id;
        }
        cart = new Cart(newCart);
      }
  
      await cart.save();
      res.status(200).json({ message: 'Cart updated successfully' });
    } catch (error) {
      console.error('Error updating cart:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  const mergeGuestCart = async (req, res, next) => {
    const { cartId } = req.body;
    const userId = req.user?.userID;
  
    if (!cartId || !userId) {
      return next(); // No cart to merge or no authenticated user
    }
  
    try {
      const guestCart = await Cart.findOne({ cartID: cartId });
      const userCart = await Cart.findOne({ userID: userId });
  
      if (guestCart) {
        if (userCart) {
          // Merge guest cart into user cart
          userCart.cartItems = [...userCart.cartItems, ...guestCart.cartItems];
          await userCart.save();
          await guestCart.remove();
        } else {
          // Assign guest cart to user
          guestCart.userID = userId;
          guestCart.cartID = undefined; // Clear cartID
          await guestCart.save();
        }
      }
      next();
    } catch (error) {
      console.error('Error merging guest cart:', error);
      res.status(500).json({ message: 'Server error during cart merge' });
    }
  };
  
module.exports = router;
