const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product must have a Name'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'Product must have a price'],
  },
  rating: {
    type: Number,
    default: 2.2,
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
