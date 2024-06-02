import { UrlData } from '../../interface/UrlData'
import axios from 'axios'
import { serverUrl } from '../../helpers/Constants'
import { useEffect, useState } from 'react'
import { GiftsList } from '../GiftsList/GiftsList'
import { FormContainer } from '../FormContainer/FormContainer'

const Container = () => {
	const [data, setData] = useState<UrlData[]>([])

	const fetchTableData = async () => {
		const response = await axios.get(`${serverUrl}/gifts`)
		setData(response.data)
	}

	useEffect(() => {
		fetchTableData()
	}, [])
	return (
		<>
			<FormContainer fetchTableData={fetchTableData} />
			<GiftsList data={data} />
		</>
	)
}

export default Container
