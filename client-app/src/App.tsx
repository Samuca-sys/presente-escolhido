import Container from './components/Container/Container'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Wrapper } from './styled'

export const App = () => {
	return (
		<Wrapper>
			<Header />
			<Container />
			<Footer />
		</Wrapper>
	)
}
