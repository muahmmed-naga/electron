import mongoose from "mongoose";
import chalk from "chalk";

const DB_CONNECTION = async () => {
  try {
    const DB = process.env.DATABASE_URI;
    const conn = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(
      chalk.bgGreen.white.bold("Success"),
      chalk.white.bold(`Conneted to ${conn.connection.host}`)
    );
  } catch (err) {
    console.log(
      chalk.red("Failed:"),
      chalk.red("Can not connectet to the Database")
    );
  }
};

export default DB_CONNECTION;
