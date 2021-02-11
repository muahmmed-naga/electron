const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

const app = require('./app')

// Database configuration
const DB = process.env.DATABASE_NAME.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose
  .connect(DB, {
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then((con) => console.log('DB connected successfully'))
  .catch((err) => console.log(err))

// Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`running at: http://localhost:${PORT}`)
})
