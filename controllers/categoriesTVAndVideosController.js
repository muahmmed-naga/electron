const fs = require('fs');

// Data
const tv_videos = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/categories_tv_videos.json`)
);

exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > tv_videos.length) {
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
    results: tv_videos.length,
    data: {
      tv_videos,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = tv_videos.find((product) => product.id === id);

  return res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};
