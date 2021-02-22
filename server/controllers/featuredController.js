const FeaturedModel = require('../models/featuredModel')

exports.getAllProducts = async (req, res) => {
  try {
    const products = await FeaturedModel.find()

    return res.status(200).json({
      status: 'success',
      products,
    })
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      msg: err,
    })
  }
}

exports.showProduct = async (req, res) => {
  try {
    const product = await FeaturedModel.findById(req.params.id)

    return res.status(200).json({
      status: 'success',
      product,
    })
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      msg: err,
    })
  }
}

exports.newProudct = async (req, res) => {
  try {
    await FeaturedModel.create(req.body)

    return res.status(200).json({
      status: 'success',
      msg: 'Product has been added successfuly',
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
    await FeaturedModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.status(200).json({
      status: 'success',
      msg: err,
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
    await FeaturedModel.findByIdAndDelete(req.params.id)

    return res.status(200).json({
      status: 'success',
      msg: 'Product has been deleted successfuly',
    })
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      msg: err,
    })
  }
}
