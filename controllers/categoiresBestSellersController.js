const fs = require('fs');

const bestSellers = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/categories_best_sellers.json`)
);

exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > bestSellers.length) {
    return res.status(404).json({
      status: 'fail',
      msg: 'Can not found this product',
    });
  }
  next();
};

exports.getAllProducts = (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: {
      bestSellers,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = bestSellers.find((product) => product.id === id);

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};
