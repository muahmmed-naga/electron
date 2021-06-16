import path from "path";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import orderRouter from "./routes/orderRouter.js";
import { errorPath, errorHandler } from "./utils/errorHandler.js";

dotenv.config();

const app = express();

app.use(express());
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/orders", orderRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/client/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Handler
app.use(errorPath);
app.use(errorHandler);

export default app;

// Up to next Update user Profile (5)
