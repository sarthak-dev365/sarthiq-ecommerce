const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { Product, Order } = require('./models');

const app = express();
app.use(cors());
app.use(express.json()); // Allows the server to read JSON data sent by the website.

// Simple test route: open http://localhost:5000/api/health
app.get('/api/health', (req, res) => {
  res.json({ message: 'Sarthiq API is running' });
});

// Get all products.
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Could not load products' });
  }
});

// Get one product using its MongoDB ID.
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: 'Invalid product ID' });
  }
});

// Add a product. This is a basic practice API, not an admin panel.
app.post('/api/products', async (req, res) => {
  try {
    const { name, category, price, image, description } = req.body;
    if (!name || !category || price === undefined) {
      return res.status(400).json({ message: 'Name, category and price are required' });
    }
    const product = await Product.create({ name, category, price, image, description });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Product could not be added' });
  }
});

// Place a simple cash-on-delivery order.
app.post('/api/orders', async (req, res) => {
  try {
    const { customerName, phone, address, items, total } = req.body;
    if (!customerName || !phone || !address || !items || items.length === 0) {
      return res.status(400).json({ message: 'Please fill all details and add a product' });
    }
    const order = await Order.create({ customerName, phone, address, items, total });
    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(400).json({ message: 'Order could not be placed' });
  }
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.log('MongoDB connection failed:', error.message);
  });
