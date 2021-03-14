import APIFeatures from '../api/features.js'
import ProductModel from './../models/productModel.js'

export const getAllProducts = async (req, res) => {
  try {
    const features = new APIFeatures(ProductModel.find(), req.query)
      .filter()
      .sort()
      .fields()
      .paginate()

    const products = await features.query

    return res.status(200).json({
      status: 'succes',
      results: products.length,
      data: {
        products,
      },
    })
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      msg: error,
    })
  }
}

export const addNewProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body)

    return res.status(200).json({
      status: 'success',
      product,
    })
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      msg: error,
    })
  }
}

export const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id)

    return res.status(200).json({
      status: 'success',
      product,
    })
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      msg: error,
    })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id)

    return res.status(200).json({
      status: 'success',
      msg: 'Product has been deleted successfuly',
    })
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      msg: error,
    })
  }
}

// Aliases
export const topTenCheep = (req, res, next) => {
  req.query.limit = '10'
  req.query.sort = 'price,name'

  next()
}

export const topTenExpensive = (req, res, next) => {
  req.query.limit = '10'
  req.query.sort = '-price,name,numInStock'

  next()
}

export const newArriavals = (req, res, next) => {
  req.query.limit = '10'
  req.query.sort = '-createdAt,name,price'

  next()
}

// Aggregations Piplines

export const productsStatistics = async (req, res) => {
  try {
    const result = await ProductModel.aggregate([
      {
        $match: { price: { $gte: 0 } },
      },
      {
        $group: {
          _id: null,
          productsCount: { $sum: 1 },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
          avgRating: { $avg: '$rating' },
        },
      },
    ])

    return res.status(400).json({
      status: 'success',
      data: {
        result,
      },
    })
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      msg: error,
    })
  }
}