import User from "../models/userModel.js";
import asyncHanlder from "express-async-handler";
import { generateToken } from "../utils/token.js";

export const userLoginAuth = asyncHanlder(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id, user.isAdmin),
    });
  } else {
    res.status(401).json({
      status: "fail",
      message: "Invalid Email or Password",
    });
  }
});

export const userRegister = asyncHanlder(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExits = await User.findOne({ email });

    if (userExits) {
      res.status(400).json({
        status: "fail",
        message: "User already exits",
      });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id, user.isAdmin),
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Can not create this user",
    });
  }
});

export const getUserProfile = asyncHanlder(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      status: "success",
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "User not found",
    });
  }
});

export const updateUserProfile = asyncHanlder(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser._id, updatedUser.isAdmin),
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "User not found",
    });
  }
});
