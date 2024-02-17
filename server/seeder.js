import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import Product from './model/product.js'
import connectDB from './config/connectDB.js'
import products from './data/products'

connectDB()

const importProductData = async () => {
  try {
    await Product.deleteMany()
    await Product.insertMany(products)
    console.log('Imported Data Complete')
  } catch (error) {
    console.log(error)
  }
}

const deleteProductData = async () => {
  try {
    await Product.deleteMany()
    console.log('Delete Data Complete')
  } catch (error) {
    console.log(error)
  }
}

if (process.argv[2] === '-d') {
  importProductData()
} else {
  deleteProductData()
}
