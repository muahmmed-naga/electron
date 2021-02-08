const express = require("express");
const morgan = require("morgan");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/v1/products", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      products: [
        { id: 1, name: "product name 1" },
        { id: 2, name: "product name 2" },
        { id: 3, name: "product name 3" },
      ],
    },
  });
});

module.exports = app;
