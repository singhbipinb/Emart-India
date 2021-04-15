import express from 'express'
const router = express.Router()

import {getbProducts,
} from '../controllers/productController.js'

router.get('/:category',getbProducts)

export default router