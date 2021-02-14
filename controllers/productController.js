const ProductModel = require('../models/productModel')
const APIFeatures = require('../utils/apiFeatures')

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
    const APIInstance = new APIFeatures(ProductModel.find(), req.query)
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

exports.productsStatistics = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(404).json({
      status: 'fail',
      msg: err,
    })
  }
}

exports.productsSizesStatistics = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(404).json({
      status: 'fail',
      msg: err,
    })
  }
}

exports.productsRatingStatistics = async (req, res) => {
  try {
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
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      msg: err,
    })
  }
}

exports.productsMonthStatistics = async (req, res) => {
  try {
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
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      msg: err,
    })
  }
}
