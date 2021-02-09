const fs = require('fs');

const featured = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/featured.json`)
);

exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > featured.length) {
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
    results: featured.length,
    data: {
      featured,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = featured.find((product) => product.id === id);

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};