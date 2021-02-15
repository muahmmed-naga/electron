const ProductModel = require('../models/productModel')
const APIFeatures = require('../utils/apiFeatures')
const AppErrors = require('./../utils/AppErrors')

// Errors handler
const catchAsyncError = require('./../utils/catchAsyncError')

// Get top 10 products
exports.getTopTen = (req, res, next) => {
  req.query.limit = '10'
  req.query.sort = 'price,name,id'
  req.query.fields = 'name,price,category,quantity,ratingAverage'

  next()
}

// Get all Products
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  const APIInstance = new APIFeatures(ProductModel.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .pageinate()

  const products = await APIInstance.query

  if (!products) return new AppErrors('Products not found')

  return res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  })
})

exports.getProduct = catchAsyncError(async (req, res, next) => {
  const product = await ProductModel.findById(req.params.id)

  if (!product) return next(new AppErrors('Product not found', 404))

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  })
})

exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await ProductModel.create(req.body)

  if (!product) return next(new AppErrors('Product not found', 404))

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  })
})

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  const product = await ProductModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )

  if (!product) return next(new AppErrors('Product not found', 404))

  return res.status(200).json({
    status: 'suucess',
    product,
  })
})

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await ProductModel.findByIdAndDelete(req.params.id)

  if (!product) return next(new AppErrors('Product not found', 404))

  req.status(204).json({
    status: 'success',
    data: null,
  })
})

exports.productsStatistics = catchAsyncError(async (req, res, next) => {
  const statistics = await ProductModel.aggregate([
    {
      $match: { price: { $gte: 0 } },
    },
    {
      $group: {
        _id: '$price',
        numPrices: { $sum: 1 },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
        totalPrices: { $sum: '$price' },
        totalQty: { $sum: '$quantity' },
      },
    },
    {
      $sort: { minPrice: -1 },
    },
  ])

  return res.status(200).json({
    status: 'success',
    data: {
      statistics,
    },
  })
})

exports.productsSizesStatistics = catchAsyncError(async (req, res, next) => {
  const sizesStatistics = await ProductModel.aggregate([
    {
      $match: { price: { $gte: 0 } },
    },
    {
      $group: {
        _id: '$sizes',
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
        avgPrices: { $avg: '$price' },
        totalPrices: { $sum: '$prices' },
      },
    },
    {
      $sort: { minPrice: -1 },
    },
  ])

  return res.status(200).json({
    status: 'success',
    data: {
      sizesStatistics,
    },
  })
})

exports.productsRatingStatistics = catchAsyncError(async (req, res, next) => {
  const ratingStatistics = await ProductModel.aggregate([
    {
      $match: { ratingAverage: { $gte: 0 } },
    },
    {
      $group: {
        _id: '$ratingAverage',
        count: { $sum: 1 },
        minRatingAverage: { $min: '$ratingAverage' },
        maxRatingAverage: { $max: '$ratingAverage' },
        avgRatinAverage: { $avg: '$ratingAverage' },
      },
    },
    {
      $sort: { minRatingAverage: -1 },
    },
  ])

  return res.status(200).json({
    status: 'success',
    data: {
      ratingStatistics,
    },
  })
})

exports.productsMonthStatistics = catchAsyncError(async (req, res, next) => {
  const year = req.params.year * 1

  const month_selles_statistics = await ProductModel.aggregate([
    {
      $unwind: '$sellesDates',
    },
    {
      $match: {
        sellesDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$sellesDates' },
        total: { $sum: 1 },
        products: { $push: '$name' },
      },
    },
    {
      $addFields: { month: '$_id' },
    },
    {
      $project: { _id: 0 },
    },
    {
      $sort: { total: -1 },
    },
  ])

  return res.status(200).json({
    status: 'success',
    data: {
      month_selles_statistics,
    },
  })
})
