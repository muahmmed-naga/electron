const fs = require('fs');

const on_sale = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/on_sale.json`)
);

exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > on_sale.length) {
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
    results: on_sale.length,
    data: {
      on_sale,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = on_sale.find((product) => product.id === id);

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};
