const express = require("express");
const {
  checkID,
  allProducts,
  getProduct,
} = require("../controllers/productsController");

const router = express.Router();

router.route("/").get(allProducts);
router.route("/:id").get(checkID, getProduct);

module.exports = router;
