import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import users from "./data/users.js";
import products from "./data/products.js";
import dotenv from "dotenv";
import DB_CONNECTION from "./config/db.js";
import chalk from "chalk";

dotenv.config();

DB_CONNECTION();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    const newUsers = await User.insertMany(users);
    const adminUser = newUsers[0]._id;

    const loadedProducts = products.map(product => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(loadedProducts);

    console.log(
      chalk.bgGreen.bold.white("SUCCESS"),
      chalk.bold.white(`Data has been imported successfully`)
    );

    process.exit();
  } catch (err) {
    console.log(
      chalk.bgRed.bold.white("FAILD"),
      chalk.bold.white(`${err.message}`)
    );
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    console.log(
      chalk.bgGreen.bold.white("SUCCESS"),
      chalk.bold.white(`Data has been deleted successfully`)
    );
    process.exit();
  } catch (err) {
    console.log(
      chalk.bgRed.bold.white("FAILD"),
      chalk.bold.white(`Faild to destroy the Data`)
    );
    process.exit(1);
  }
};

if (process.argv[2] === "--destroy") {
  deleteData();
} else {
  importData();
}
