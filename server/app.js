import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import productsRouter from './routes/productRouter.js'

// Environment variables config
dotenv.config({ path: './../.env' })

const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/v1/products', productsRouter)

export default app
