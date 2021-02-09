const fs = require('fs');

const new_arrivals = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/new_arriavals.json`)
);

exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > new_arrivals.length) {
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
    results: new_arrivals.length,
    data: {
      new_arrivals,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = new_arrivals.find((product) => product.id === id);

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};
