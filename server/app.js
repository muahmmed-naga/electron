const express = require('express')
const morgan = require('morgan')

// Routers
const featuredRouter = require('./routes/featuredRouter')

const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/v1/categories/featured', featuredRouter)

module.exports = app
