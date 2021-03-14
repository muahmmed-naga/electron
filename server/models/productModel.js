import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product must have a name'],
      minLength: [10, 'Product name must be above or equal 10 characaters'],
      maxLength: [40, 'Product name must be below or equal 40 characaters'],
      unique: true,
    },
    category: {
      type: String,
      required: [true, 'Product must have a category'],
    },
    price: {
      type: Number,
      required: [true, 'Product must have a price'],
    },
    rating: {
      type: Number,
      required: [true, 'Product must have a rating'],
      default: 0,
    },
    description: {
      type: String,
    },
    numInStock: {
      type: Number,
      default: 0,
    },
    mainImage: {
      type: String,
      required: [true, 'Product must have a main image'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    thumbnails: [Object],
  },
  { timestamps: true }
)

const ProductModel = mongoose.model('Product', ProductSchema)

export default ProductModel
