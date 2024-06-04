import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	font-family: var(--font-cursive);
	img {
		height: 400px;
		width: 100%;
		object-fit: cover;
	}
`

export const CoupleNames = styled.div`
	h1 {
		font-size: 1rem;
	}
`
