import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import Product from './models/ProductModel.js'
import connectDB from './config/connectDB.js'
import products from './data/products.js'

connectDB()

const importProductData = async () => {
  try {
    await Product.deleteMany()
    await Product.insertMany(products)
    console.log('Imported Data Complete')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

const deleteProductData = async () => {
  try {
    await Product.deleteMany()
    console.log('Delete Data Complete')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  deleteProductData()
} else {
  importProductData()
}
