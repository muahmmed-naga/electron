const fs = require("fs");

const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/categories.json`)
);

exports.getCategories = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      categories,
    },
  });
};
