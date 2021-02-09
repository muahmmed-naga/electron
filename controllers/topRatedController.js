const fs = require('fs');

const top_rated = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/top_rated.json`)
);

exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > top_rated.length) {
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
    results: top_rated.length,
    data: {
      top_rated,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = top_rated.find((product) => product.id === id);

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};
