const mongoose = require('mongoose');
const { reviewSchema } = require('./reviewModel');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 255 },
  description: { type: String, required: true, maxlength: 1000 },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  reviews: [reviewSchema],
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
