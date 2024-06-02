import express from 'express'
import { giftModel } from '../model/giftModel'

export const addGift = async (req: express.Request, res: express.Response) => {
	try {
		const { gift } = req.body
		const giftFound = await giftModel.find({ gift })
		if (giftFound.length > 0) {
			res.status(409)
			res.send(giftFound)
		} else {
			const giftAdded = await giftModel.create({ gift })
			res.status(201).send(giftAdded)
		}
	} catch (error) {
		console.log(error, 'error')
		res.status(500).send({ message: 'Something went wrong!' })
	}
}

export const getAllGifts = async (
	req: express.Request,
	res: express.Response,
) => {
	try {
		const gifts = await giftModel.find()

		if (gifts.length < 0) {
			res.status(404).send({ message: 'No gifts added yet!' })
		} else {
			res.status(200).send(gifts)
		}
	} catch (error) {
		console.log(error, 'error')
		res
			.status(500)
			.send({ message: 'Something went wrong when getting all gifts :(' })
	}
}
