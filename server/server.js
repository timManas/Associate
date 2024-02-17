import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import express from 'express'
import connectDB from './config/connectDB.js'

const PORT = process.env.PORT || 5000
const app = express()

connectDB()

app.get('/', (req, res) => {
  res.send('API Running')
})

app.listen(PORT, () => {
  ;`API is listening on Port: ${PORT}`
})
