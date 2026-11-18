const {Product} = require('../models/productModel');

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try{
    const { name, category, offerPrice, price, image, description, featured } = req.body;
    console.log("offerPrice", offerPrice);
    const product = await Product.create({ name, category, offerPrice, price, image, description, featured });
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(400).json({ message: 'Error creating product', error });
  }
}

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  try{
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching products', error });
  }
}


// GET ALL FEATURED PRODUCTS
exports.getFeaturedProducts = async (req, res) => {
  try{
    const products = await Product.find({ featured: true }).sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching products', error });
  }
}