const express = require('express')
const morgan = require('morgan')

// Routes
const productRouter = require('./routes/productRouter')
const bestSellerRouter = require('./routes/bestSellerRouter')
const camerasRouter = require('./routes/camerasRouter')
const tvAndVideosRouter = require('./routes/TVAndVideosRouter')
const audioRouter = require('./routes/audioRouter')
const featuredRouter = require('./routes/featuredRouter')
const onSaleRouter = require('./routes/onSaleRouter')
const topRatedRouter = require('./routes/topRatedRouter')
const newArrivalsRouter = require('./routes/newArrivalsRouter')

const app = express()

// Middlewares

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

// Routes handler
app.use('/api/v1/products', productRouter)
app.use('/api/v1/categories/best-sellers', bestSellerRouter)
app.use('/api/v1/categories/cameras', camerasRouter)
app.use('/api/v1/categories/tv-videos', tvAndVideosRouter)
app.use('/api/v1/categories/audios', audioRouter)
app.use('/api/v1/categories/featured', featuredRouter)
app.use('/api/v1/categories/on-sale', onSaleRouter)
app.use('/api/v1/categories/top-rated', topRatedRouter)
app.use('/api/v1/categories/new-arrivals', newArrivalsRouter)

// Handle unhanlded routes
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    msg: `Can't find this route ${req.originalUrl} on this server`,
  })
})

module.exports = app
