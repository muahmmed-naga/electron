const fs = require('fs');

const audios = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/categories_audio.json`)
);

exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > audios.length) {
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
      audios,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = audios.find((product) => product.id === id);

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};
