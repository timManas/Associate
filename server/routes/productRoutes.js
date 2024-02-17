import express from 'express'
import {
  getAllProducts,
  getGears,
  getProduct,
} from '../controllers/productControllers.js'

const router = express.Router()

router.get('/all', getAllProducts)
router.get('/gears', getGears)
router.get('/:id', getProduct)

export default router
