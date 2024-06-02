import mongoose from 'mongoose'

const newGiftSchema = new mongoose.Schema(
	{
		gift: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
)

export const giftModel = mongoose.model('Gifts', newGiftSchema)
