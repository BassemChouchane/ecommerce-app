const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cartRoutes = require('./routes/cart');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
