const mongoose = require('mongoose')
const slugify = require('slugify')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product must have a Name'],
    // unique: true,
    trim: true,
    maxLength: [40, 'Product name must be less or equal 40 character'],
    minLength: [10, 'Product name must be more or equal 10 characters'],
  },
  slug: String,
  price: {
    type: Number,
    required: [true, 'Product must have a price'],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
    min: [0, 'Product rating must be above 1.0'],
    max: [5, 'Product rating must be below 5.0'],
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

  sizes: {
    type: [String],
    enum: {
      values: ['XS', 'S', 'M', 'L', 'XL'],
      message: 'Sizes is either: XL, S, M, L, XL',
    },
  },
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
