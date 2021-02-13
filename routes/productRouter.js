const express = require('express')
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getTopTen,
  productsStatistics,
} = require('../controllers/productController')

const router = express.Router()

// Get top 10
router.route('/top-10-cheeper').get(getTopTen, getAllProducts)

router.route('/products-statistics').get(productsStatistics)

router.route('/').get(getAllProducts).post(createProduct)
router
  .route('/product/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)

module.exports = router
