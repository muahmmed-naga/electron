const express = require('express')
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getTopTen,
  productsStatistics,
  productsSizesStatistics,
  productsRatingStatistics,
} = require('../controllers/productController')

const router = express.Router()

// Get top 10
router.route('/top-10-cheeper').get(getTopTen, getAllProducts)

// Aggregation Piplines
router.route('/products-statistics/prices').get(productsStatistics)
router.route('/products-statistics/sizes').get(productsSizesStatistics)
router.route('/products-statistics/rating').get(productsRatingStatistics)

router.route('/').get(getAllProducts).post(createProduct)
router
  .route('/product/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)

module.exports = router
