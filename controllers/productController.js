const ProductModel = require('../models/productModel')

exports.getAllProducts = async (req, res) => {
  try {
    const queryObj = { ...req.query }

    // Delete unexpected query from the request
    const exceptedQuery = ['page', 'limit', 'sort', 'fields']
    exceptedQuery.forEach((el) => delete queryObj[el])

    // Filter by mongoDB pattern
    let queryStr = JSON.stringify(queryObj)
    const queryResult = queryStr.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    )

    const query = ProductModel.find(JSON.parse(queryResult))

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
