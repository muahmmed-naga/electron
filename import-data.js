const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productModel = require('./models/productModel')

// Env config
dotenv.config({ path: './.env' })

// File
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`))

// DB Connection
const DB = process.env.DATABASE_NAME.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connected'))

// Import data from a file
const importData = async () => {
  try {
    await productModel.create(products)
    console.log('Data imported!')
  } catch (err) {
    console.log(err)
  }

  process.exit()
}

// Delet data
const deleteData = async () => {
  try {
    await productModel.deleteMany()
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}
