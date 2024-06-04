// import express from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import connectDb from './src/config/dbConfig'
// import giftRoutes from './src/routes/giftRoutes'

// dotenv.config()
// connectDb()

// const port = process.env.PORT || 3001 //back e tem q ser igual a VITE_SERVER_URL

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(
// 	cors({
// 		origin: 'http://localhost:3000', //front
// 		credentials: true,
// 	}),
// )

// app.use('/api/', giftRoutes)

// app.listen(port, () => {
// 	console.log(`Server started successfully on port : ${port}`)
// })

// import express from 'express'
// import cors from 'cors'

// const app = express()
// app.use(express.json())
// app.use(cors())

// const port = process.env.PORT || 3001

// app.get('/', (req, res) => {
// 	return res.json('hello world')
// })

// app.listen(port, () => console.log(`listening on ${port}`))

// import dotenv from 'dotenv'
// import cors from 'cors'
// import connectDb from './src/config/dbConfig'
// import giftRoutes from './src/routes/giftRoutes'
// import express from 'express'

// dotenv.config()
// connectDb()

// const port = process.env.PORT || 3001 //back e tem q ser igual a VITE_SERVER_URL

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())

// app.use('/', giftRoutes)

// app.listen(port, () => console.log(`listening on ${port}`))

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
