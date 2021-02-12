const ProductModel = require('../models/productModel')

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
