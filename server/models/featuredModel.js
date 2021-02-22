const mongoose = require('mongoose')
const slugify = require('slugify')

// Featured schema
const FeaturedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product must have a name'],
      minLength: [10, 'Product name must be above or equal 10 characters'],
      maxLength: [40, 'Product name must be below or equal 10 characters'],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, 'Product mus have a price'],
      min: [1, 'Product price must be greater that 1'],
    },
    category: {
      type: String,
      required: [true, 'Product must associated to category'],
    },
    main_image: {
      type: String,
      required: [true, 'Product must have atleast one image'],
    },
    sizes: [String],
    quantity: {
      type: Number,
      required: [true, 'Product must have a quantity'],
    },
    thumbnails: [String],
    description: String,
    seels_dates: [Date],
    created_at: {
      type: Date,
      default: new Date(),
      select: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

// Virtual functions
FeaturedSchema.virtual('slug').get(function () {
  return (this.name = slugify(this.name, { lower: true }))
})

const FeaturedModel = new mongoose.model('Featured', FeaturedSchema)

module.exports = FeaturedModel
