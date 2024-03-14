// app.js
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'

// Load environment variables from .env file
//loading
dotenv.config()

import apiRoutes from './routes/index'
import connectDB from './database'

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

// Routes
app.use('/api', apiRoutes)
connectDB()

// Start server
const PORT = process.env.PORT || 4444
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
