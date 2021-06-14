import app from "./app.js";
import chalk from "chalk";
import DB_CONNECTION from "./config/db.js";

// Database connection
DB_CONNECTION();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    chalk.bgGreen.bold.white("SUCCESS"),
    chalk.bold.white(`server is running at http://localhost:${PORT}`)
  );
});
