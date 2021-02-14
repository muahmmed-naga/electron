const mongoose = require('mongoose')
const slugify = require('slugify')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product must have a Name'],
    // unique: true,
    trim: true,
  },
  slug: String,
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
  created_at: {
    type: String,
    default: new Date().toISOString(),
    select: false,
  },
  sellesDates: [Date],
})

// Document Middleware: runs only before .save() and .create()
productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
