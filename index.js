import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import fetch from 'node-fetch'

import dotenv from 'dotenv'

const PORT = 3001
const app = express()

dotenv.config()

morgan('tiny')

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/gifts', () => {
	const url =
		'https://c4083c62-66d1-489f-b0c9-3dfdbb234c94-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/gifts/collections/gifts?page-size=20 '
	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'X-Cassandra-Token':
				'AstraCS:aeZZaoZSbryMzbQKjLcShtEO:417068ca02bf79f8d6a1c965b34b06970d248bfb108335f4eb398398cdd5bf63',
		},
	}
	fetch(url, options)
		.then((response) => response.json())
		.then((json) => response.json(json))
		.catch((err) => console.error('error:' + err))
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
