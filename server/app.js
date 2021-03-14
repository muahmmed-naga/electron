import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

// Environment variables config
dotenv.config({ path: './../.env' })

const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

export default app
