const fs = require('fs');
const express = require('express');

const app = express();

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/data/products.json`, 'utf-8')
);

// Get all products
const getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  });
};

// Get Product
const getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = products.find((product) => product.id === id);

  if (id > products.length) {
    return res.status(400).json({
      status: 'fail',
      msg: 'Can not found this Product, Make sure from your Request.',
    });
  }

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};

app.route('/api/v1/products').get(getAllProducts);
app.route('/api/v1/products/:id').get(getProduct);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('server is running');
});
