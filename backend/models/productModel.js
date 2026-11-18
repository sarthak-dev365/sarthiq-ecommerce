const mongoose = require('mongoose');

// Product schema: tells MongoDB which details a product will have.
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  offerPrice: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  featured: { type: Boolean, default: false }
}, { timestamps: true });



const Product = mongoose.model('Product', productSchema);


module.exports = { Product };
