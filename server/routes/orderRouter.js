import express from "express";
import {
  addOrderItems,
  getAllOrders,
  getSingleOrderById,
  updateUserOrderPaid,
} from "../controllers/orderController.js";
import { userProtectAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(userProtectAuth, getAllOrders)
  .post(userProtectAuth, addOrderItems);

router.route("/:id").get(userProtectAuth, getSingleOrderById);
router.route("/:id/pay").patch(userProtectAuth, updateUserOrderPaid);

export default router;
