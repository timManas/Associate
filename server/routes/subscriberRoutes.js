import express from 'express'
import { addNewSubscriber } from '../controllers/subscriberController.js'

const router = express.Router()

router.put('/', addNewSubscriber)

export default router
