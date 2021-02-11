const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product must have a Name'],
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product must have a price'],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: [true, 'Prdouct must have a category'],
  },
  image: {
    type: String,
    required: [true, 'Product must have a main image'],
  },
  quantity: {
    type: Number,
    required: [true, 'Product must have a quantity'],
  },
  thumbnails: [String],
  sizes: [String],
  description: String,
  additionalDetails: [String],
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
