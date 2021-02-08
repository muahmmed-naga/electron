const express = require("express");
const {
  checkID,
  getCategories,
  showProduct,
} = require("../controllers/categoriesController");

const router = express.Router();

router.route("/").get(getCategories);
router.route("/:id").get(checkID, showProduct);

module.exports = router;
