import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import express from 'express'
import https from 'https'
import morgan from 'morgan'
import fs from 'fs'
import connectDB from './config/connectDB.js'
import productRoutes from './routes/productRoutes.js'
import subscriberRoutes from './routes/subscriberRoutes.js'

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(morgan('dev'))

connectDB()

app.use('/product', productRoutes)
app.use('/subscriber', subscriberRoutes)
app.get('/', (req, res) => {
  res.send('API Running')
})

// app.listen(PORT, () => {
//   console.log(`API is listening on Port: ${PORT}`)
// })

// Create https server
const keys = {
  key: fs.readFileSync('./certificate/localhost.key'),
  cert: fs.readFileSync('./certificate/localhost.crt'),
}
const server = https.createServer(keys, app)
server.listen(PORT, () => {
  console.log(`API is listening on Port: ${PORT}`)
})
