import axios from 'axios'
import { serverUrl } from '../../helpers/Constants'
import { useState } from 'react'
import { Container } from './styled'
interface IFormContainerProps {
	fetchTableData: () => void
}
export const FormContainer = ({ fetchTableData }: IFormContainerProps) => {
	const [gift, setGift] = useState('')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			await axios.post(`${serverUrl}/gifts`, {
				gift,
			})
			fetchTableData()
			setGift('')
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Digite o presente'
					required
					name='gift'
					value={gift}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setGift(e.target.value)
					}
				/>
				<button type='submit' className=''>
					Presentear
				</button>
			</form>
		</Container>
	)
}
