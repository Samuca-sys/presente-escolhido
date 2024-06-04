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

import express from 'express'
import cors from 'cors'

interface IUser {
	id: string
	name: string
	email: string
}
const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3001

const users: IUser[] = []

app.get('/', (req, res) => {
	return res.json('hello world')
})

app.get('/users', (req, res) => {
	return res.json(users)
})

app.post('/users', (req, res) => {
	const { name, email } = req.body

	const newUser = {
		id: Math.random().toString(36),
		name,
		email,
	}

	users.push(newUser)
	return res.json(newUser)
})

app.delete('/users/:id', (req, res) => {
	const { id } = req.params

	const index = users.findIndex((user) => user.id === id)

	if (index < 0) {
		return res.status(404).json({ Error })
	}

	users.splice(index, 1)
	return res.status(204).json()
})

app.listen(port, () => console.log(`listening on ${port}`))
