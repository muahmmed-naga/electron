import mongoose from 'mongoose'
import chalk from 'chalk'

const DB_CONNECT = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(
      chalk.bgGreen.black.bold('Success '),
      chalk.white.bold(`Database connected to: ${conn.connection.host}`)
    )
  } catch (err) {
    console.error(
      chalk.bgRed.black.bold('Success '),
      chalk.white.bold(
        `Something went wrong while connected to database: ${err}`
      )
    )
  }
}

export default DB_CONNECT
