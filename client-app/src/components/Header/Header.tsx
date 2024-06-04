import { Container, CoupleNames } from './styled'

import flowers from '../assets/flowers.png'

export const Header = () => {
	return (
		<Container>
			<CoupleNames>
				<h1>Samuel & Vitória</h1>
				<img src={flowers} />
			</CoupleNames>
		</Container>
	)
}
