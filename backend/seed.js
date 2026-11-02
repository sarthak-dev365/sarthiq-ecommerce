const mongoose = require('mongoose');
require('dotenv').config();
const { Product } = require('./models');

const products = [
  { name: 'Everyday Backpack', category: 'Accessories', price: 899, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700', description: 'A simple and comfortable backpack for everyday use.' },
  { name: 'Classic Wrist Watch', category: 'Accessories', price: 1299, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700', description: 'A clean classic watch for every occasion.' },
  { name: 'Wireless Headphones', category: 'Electronics', price: 1799, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700', description: 'Enjoy music and calls with comfortable headphones.' },
  { name: 'Running Shoes', category: 'Fashion', price: 1499, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700', description: 'Lightweight shoes for your daily routine.' },
  { name: 'Desk Lamp', category: 'Home', price: 699, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700', description: 'A warm and useful lamp for your study table.' },
  { name: 'Coffee Mug', category: 'Home', price: 299, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=700', description: 'A simple ceramic mug for your favourite drink.' }
];

async function addSampleProducts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Sample products added successfully');
  } catch (error) {
    console.log('Seed error:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

addSampleProducts();
