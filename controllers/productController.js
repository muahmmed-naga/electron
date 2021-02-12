const ProductModel = require('../models/productModel')

// Get top 10 products
exports.getTopTen = (req, res, next) => {
  req.query.limit = '10'
  req.query.sort = 'price,name,id'
  req.query.fields = 'name,price,category,quantity,ratingAverage'

  next()
}

// Get all Products
exports.getAllProducts = async (req, res) => {
  try {
    const queryObj = { ...req.query }

    // Delete unexpected query from the request
    const excludeQueries = ['page', 'limit', 'sort', 'fields']
    excludeQueries.forEach((el) => delete queryObj[el])

    // Filter by mongoDB pattern
    let queryStr = JSON.stringify(queryObj)
    const queryResult = queryStr.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    )

    let query = ProductModel.find(JSON.parse(queryResult))

    // Sorting
    if (req.query.sort) {
      const sort = req.query.sort.split(',').join(' ')
      query = query.sort(sort)
    } else {
      query = query.sort('-created_at')
    }

    // Show fields
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ')
      query = query.select(fields)
    } else {
      query = query.select('-__v')
    }

    // Pagination
    const count = await ProductModel.countDocuments()

    const page = req.query.page * 1 || 1
    const limit = req.query.limit * 1 || count
    const skip = (page - 1) * limit

    query = query.skip(skip).limit(limit)

    if (req.query.page) {
      const count = await ProductModel.countDocuments()
      if (skip >= count) throw new Error('This page is not exists')
    }

    const products = await query

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
