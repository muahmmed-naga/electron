const express = require("express");
const morgan = require("morgan");

// Routes
const bestSellerRouter = require("./routes/bestSellerRouter");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes handler
app.use("/api/v1/categories/best-sellers", bestSellerRouter);

module.exports = app;
