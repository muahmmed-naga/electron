const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('Success API')
})

app.get('/api/products', (req, res) => {
  res.status(200).json({
    status: 'success',
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

app.listen(5000, () => {
  console.log('Running at 5000')
})
