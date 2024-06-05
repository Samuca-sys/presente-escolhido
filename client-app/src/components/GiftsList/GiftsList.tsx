import { useEffect } from 'react'
import { UrlData } from '../../interface/UrlData'

import { Container, List, ListContainer } from './styled'

interface IDataTableProps {
	data: UrlData[]
}

export const GiftsList = ({ data }: IDataTableProps) => {
	const renderList = () => {
		return data.map((item) => {
			return (
				<li key={item._id} data-icon='🖤'>
					{item.gift}
				</li>
			)
		})
	}

	useEffect(() => {
		renderList()
	}, [data])

	return (
		<Container>
			<p>Presentes preparados por Deus:</p>
			<ListContainer>
				<List>{renderList()}</List>
			</ListContainer>
		</Container>
	)
}
