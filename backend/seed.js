// seed.js
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const dotenv = require('dotenv');
const products = require('./products.json'); // Adjust path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB connected');
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log('Data imported!');
  process.exit();
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});
