import express from "express";
import {
  getAllProducts,
  getProduct,
  getTopTenCheepPrice,
  getTopTenExpensivePrice,
} from "../controllers/productController.js";

const router = express.Router();

// Aliases
router.route("/top-10-cheep-price").get(getTopTenCheepPrice, getAllProducts);
router
  .route("/top-10-expensive-price")
  .get(getTopTenExpensivePrice, getAllProducts);

router.route("/").get(getAllProducts);
router.route("/:id").get(getProduct);

export default router;
