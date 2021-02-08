const fs = require("fs");

const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/categories_best_sellers.json`)
);

exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > categories.length) {
    return res.status(404).json({
      status: "fail",
      msg: "Proudct not found",
    });
  }

  next();
};

exports.getCategories = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      categories,
    },
  });
};

exports.showProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = categories.find(el => el.id === id);

  return res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};

// Up to next ==> enhance categories best sellers endpoint (Look at postman show request)
