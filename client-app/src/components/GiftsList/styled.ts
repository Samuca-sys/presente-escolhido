import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	flex-direction: column;

	font-family: var(--font-cursive);

	margin-bottom: 10rem;

	> p {
		margin-bottom: 1rem;
	}
`

export const List = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	flex-direction: column;

	height: 320px;

	border: 1px dashed var(--black);
	background: var(--white);
	overflow: auto;
	scrollbar-color: #966b47 #f8f3e4;
	scrollbar-width: thin;

	padding: 1rem;
	width: 100%;

	p {
		text-transform: capitalize;
	}
`
