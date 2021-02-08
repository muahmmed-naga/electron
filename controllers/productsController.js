const fs = require("fs");

// Products data
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/products.json`, "utf-8")
);

// Middlewares
exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > products.length) {
    return res.status(404).json({
      status: "fail",
      msg: "Invalid product ID",
    });
  }
  next();
};

exports.allProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = products.find(product => product.id === id);

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};
