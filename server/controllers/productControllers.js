import asyncHandler from 'express-async-handler'

const getAllProducts = asyncHandler(async (req, res) => {
  res.send('Get All Products')
})

export { getAllProducts }
