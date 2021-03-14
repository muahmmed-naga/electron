import mongoose from 'mongoose'
import chalk from 'chalk'

const DB_CONNECTION = async () => {
  const DB = process.env.DB_URI

  try {
    const conn = await mongoose.connect(DB, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(
      chalk.bgGreen.black.bold('Success'),
      chalk.white.bold(`Connected to: ${conn.connection.host}`)
    )
  } catch (error) {
    console.log(
      chalk.bgRed.black.bold('Failed'),
      chalk.red.bold(`Can not connect to database`)
    )
  }
}

export default DB_CONNECTION
