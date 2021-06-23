import Product from "../models/productModel.js";
import asyncHanlder from "express-async-handler";
import APIFeatures from "../utils/APIFeatues.js";

// Aliases
export const getTopTenCheepPrice = (req, res, next) => {
  req.query.limit = "10";
  req.query.sort = "price,name,createdAt,rating";
  req.query.fields = "name,price,image,countInStock";

  next();
};

export const getTopTenExpensivePrice = (req, res, next) => {
  req.query.limit = "10";
  req.query.sort = "-price,name,createdAt,rating";
  req.query.fields = "name,price,image,countInStock";

  next();
};

export const getAllProducts = asyncHanlder(async (req, res) => {
  try {
    const apiFeatures = new APIFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .fields()
      .paginate();

    const products = await apiFeatures.model;

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
