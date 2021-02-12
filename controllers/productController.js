const ProductModel = require('../models/productModel')

// Get top 10 products
exports.getTopTen = (req, res, next) => {
  req.query.limit = '10'
  req.query.sort = 'price,name,id'
  req.query.fields = 'name,price,category,quantity,ratingAverage'

  next()
}

class APIFuctionality {
  constructor(query, queryString) {
    this.query = query
    this.queryString = queryString
  }

  filter() {
    const queryObj = { ...this.queryString }

    const excludeQueries = ['page', 'limit', 'sort', 'fields']
    excludeQueries.forEach((el) => delete queryObj[el])

    let queryStr = JSON.stringify(queryObj)
    const queryResult = queryStr.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    )

    this.query = this.query.find(JSON.parse(queryResult))

    return this
  }

  sort() {
    if (this.queryString.sort) {
      const sort = this.queryString.sort.split(',').join(' ')
      this.query = this.query.sort(sort)
    } else {
      this.query = this.query.sort('-created_at')
    }

    return this
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ')
      this.query = this.query.select(fields)
    } else {
      this.query = this.query.select('-__v')
    }

    return this
  }

  pageinate() {
    const page = this.queryString.page * 1 || 1
    const limit = this.queryString.limit * 1 || 30
    const skip = (page - 1) * limit

    this.query = this.query.skip(skip).limit(limit)

    return this
  }
}

// Get all Products
exports.getAllProducts = async (req, res) => {
  try {
    const APIInstance = new APIFuctionality(ProductModel.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pageinate()
    const products = await APIInstance.query

    return res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    })
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      msg: err,
    })
  }
}

exports.getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id)

    return res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    })
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      msg: err,
    })
  }
}

exports.createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body)

    return res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    })
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      msg: err,
    })
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )

    return res.status(200).json({
      status: 'suucess',
      product,
    })
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      msg: err,
    })
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id)

    req.status(204).json({
      status: 'success',
      data: null,
    })
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      msg: 'Product has been deleted',
    })
  }
}
