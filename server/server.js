import app from './app.js'
import chalk from 'chalk'
import DB_CONNECTION from './config/db.js'

// Database connection
DB_CONNECTION()

// Server
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(
    chalk.bgGreen.black.bold('Success'),
    chalk.white.bold(`Server is running at: http://localhost:${PORT}`)
  )
})

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'sucess',
    msg: 'API is running',
  })
})
