import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './src/config/dbConfig'
import giftRoutes from './src/routes/giftRoutes'
import express from 'express'

dotenv.config()
connectDb()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
	cors({
		origin: 'https://presente-escolhido.vercel.app', //front
		credentials: true,
	}),
)

const port = process.env.PORT || 3001
app.use('/', giftRoutes)

app.listen(port, () => console.log(`listening on ${port}`))
