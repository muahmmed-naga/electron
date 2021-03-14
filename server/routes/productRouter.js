import express from 'express'
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  newArriavals,
  topTenCheep,
  topTenExpensive,
} from './../controllers/productController.js'

const router = express.Router()

router.route('/').get(getAllProducts).post(addNewProduct)
router.route('/product/:id').get(getProduct).delete(deleteProduct)

// Aliases
router.route('/top-10-cheep').get(topTenCheep, getAllProducts)
router.route('/top-10-expensive').get(topTenExpensive, getAllProducts)
router.route('/new-arriavals').get(newArriavals, getAllProducts)

export default router
