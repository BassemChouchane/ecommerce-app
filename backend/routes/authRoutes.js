const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registration Route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password
    });

    // Save the new user
    await newUser.save();

    // Respond with success
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    // Check if the user exists and the password matches
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token valid for 1 hour
    });

    // Set JWT as a cookie (HTTP-only, Secure)
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensure secure cookies in production
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    // Respond with success and user ID
    res.json({ message: 'Login successful', userID: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Check Authentication Status Route
router.get('/check', async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    res.json({ message: 'Authenticated', userID: user._id });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Logout Route
router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  res.json({ message: 'Logged out successfully', auth: false });
});

module.exports = router;


