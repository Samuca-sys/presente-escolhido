import { useEffect } from 'react'
import { UrlData } from '../../interface/UrlData'

import { Container, List } from './styled'

interface IDataTableProps {
	data: UrlData[]
}

export const GiftsList = ({ data }: IDataTableProps) => {
	const renderList = () => {
		return data.map((item) => {
			return <p key={item._id}>{item.gift}</p>
		})
	}

	useEffect(() => {
		renderList()
	}, [data])

	return (
		<Container>
			<p>Presentes preparados por Deus:</p>
			<List>{renderList()}</List>
		</Container>
	)
}
