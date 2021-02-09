const fs = require('fs');

// Cameras data
const cameras = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/categories_cameras.json`)
);

// Middlewares
exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > cameras.length) {
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
    results: cameras.length,
    data: {
      cameras,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = cameras.find((product) => product.id === id);

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};
