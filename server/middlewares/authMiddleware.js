import asyncHanlder from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const userProtectAuth = asyncHanlder(async (req, res, next) => {
  let token;

  console.log("FROM userProtectAuth");
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      console.log("Found Auth");
      token = req.headers.authorization.split(" ")[1];
      const { id } = jwt.verify(token, process.env.JWT_SECRIT_TOKEN);

      req.user = await User.findById(id);
    } catch (err) {
      console.log("NOT Found Auth");
      res.status(401);
      throw new Error("Not authorized, failed token");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Token not found");
  }
  next();
});
