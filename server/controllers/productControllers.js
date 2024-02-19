import asyncHandler from 'express-async-handler'
import ProductModel from '../models/ProductModel.js'

const getAllProducts = asyncHandler(async (req, res) => {
  console.log('getAllProducts')
  try {
    const movie = await ProductModel.find()
    res.json(movie)
  } catch (err) {
    res.json({ error: err.message })
  }
})

const getProduct = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.id
    const product = await ProductModel.find({ _id: productId })
    res.send(product)
  } catch (err) {
    res.json({ error: err.message })
  }

  res.send('Get Product: ' + req.params.id)
})

const getGears = asyncHandler(async (req, res) => {
  res.send('Get All Gears')
})

export { getAllProducts, getProduct, getGears }
