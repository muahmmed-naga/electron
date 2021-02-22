const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Environment variables
dotenv.config({
  path: './../.env',
})

// Connect to database
const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD)

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err))

// Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Running at  ${PORT}`)
})
