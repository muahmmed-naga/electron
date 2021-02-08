const express = require("express");
const morgan = require("morgan");
const productsRouter = require("./routes/productsRoute");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes handler
app.use("/api/v1/products", productsRouter);

module.exports = app;
