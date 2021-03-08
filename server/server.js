import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import DB_CONNECT from './config/db.js'

dotenv.config({ path: './../.env' })

import products from './data/products.js'

const app = express()

// Database
DB_CONNECT()

// Server

app.get('/', (req, res) => {
  res.send('Success API')
})

app.get('/api/products', (req, res) => {
  res.status(200).json({
    status: 'successsss',
    results: products.length,
    products,
  })
})

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id * 1
  const product = products.find((product) => product._id === id)

  res.status(200).json({
    status: 'success',
    product,
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    chalk.bgGreen.black.bold('Success '),
    chalk.white.bold(`Server running at ${PORT}`)
  )
})
