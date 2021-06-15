import express from "express";
import {
  userLoginAuth,
  getUserProfile,
  userRegister,
  // updateUserProfile,
} from "../controllers/userController.js";
import { userProtectAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/login").post(userLoginAuth);
router.route("/signup").post(userRegister);
router.route("/profile").get(userProtectAuth, getUserProfile);
//   .patch(userProtectAuth, updateUserProfile);

export default router;
