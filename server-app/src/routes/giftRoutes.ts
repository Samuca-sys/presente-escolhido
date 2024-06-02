import express from 'express'
import { addGift, getAllGifts } from '../controllers/giftControllers'

const router = express.Router()

router.post('/gifts', addGift)
router.get('/gifts', getAllGifts)

export default router
