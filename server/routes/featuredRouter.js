const express = require('express')
const {
  getAllProducts,
  showProduct,
  newProudct,
  deleteProduct,
  updateProduct,
} = require('./../controllers/featuredController')

const router = express.Router()

router.route('/').get(getAllProducts).post(newProudct)
router
  .route('/product/:id')
  .get(showProduct)
  .delete(deleteProduct)
  .patch(updateProduct)

module.exports = router
