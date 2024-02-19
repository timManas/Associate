import path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import express from 'express'
import https from 'https'
import morgan from 'morgan'
import cors from 'cors'
import fs from 'fs'
import connectDB from './config/connectDB.js'
import productRoutes from './routes/productRoutes.js'
import subscriberRoutes from './routes/subscriberRoutes.js'

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

connectDB()

app.use('/product', productRoutes)
app.use('/subscriber', subscriberRoutes)

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve()
  app.use('/uploads', express.static('/var/data/uploads'))
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  const __dirname = path.resolve()
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

// Create https server
const keys = {
  // key: fs.readFileSync('./certificate/localhost.key'),
  // cert: fs.readFileSync('./certificate/localhost.crt'),
}
const server = https.createServer(keys, app)
server.listen(PORT, () => {
  console.log(`API is listening on Port: ${PORT}`)
})
