import Product from "../models/productModel.js";
import asyncHanlder from "express-async-handler";

export const getAllProducts = asyncHanlder(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      status: "success",
      results: products.length,
      products,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      msg: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  }
});

export const getProduct = asyncHanlder(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      product,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      msg: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  }
});

// export const updateProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json({
//       status: "success",
//       msg: "Product has been updated successfully",
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "fail",
//       msg: err.message,
//       stack: process.env.NODE_ENV === "development" ? err.stack : null,
//     });
//   }
// };

// export const deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json({
//       status: "success",
//       msg: "Product has been deleted successfully",
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "fail",
//       msg: err.message,
//       stack: process.env.NODE_ENV === "development" ? err.stack : null,
//     });
//   }
// };
