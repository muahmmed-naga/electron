const express = require("express");

const {
  checkID,
  getAllBestSellers,
  getBestSellerProduct,
} = require("../controllers/categoiresBestSellersController");

const router = express.Router();

router.route("/").get(getAllBestSellers);
router.route("/product/:id").get(checkID, getBestSellerProduct);

module.exports = router;
