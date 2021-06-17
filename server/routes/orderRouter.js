import express from "express";
import {
  addOrderItems,
  getAllOrders,
  getSingleOrderById,
} from "../controllers/orderController.js";
import { userProtectAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(userProtectAuth, getAllOrders)
  .post(userProtectAuth, addOrderItems);

router.route("/:id").get(userProtectAuth, getSingleOrderById);

export default router;
