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

export const List = styled.ul`
	display: flex;
	align-items: center;
	position: relative;
	flex-direction: column;

	border: 1px dashed var(--black);
	background: var(--white);
	overflow: auto;
	scrollbar-color: #966b47 #f8f3e4;
	scrollbar-width: thin;

	padding: 1rem;
	width: 100%;
	height: 100%;

	li {
		text-transform: capitalize;
		list-style-type: none;
		text-align: center;
	}

	li::before {
		content: attr(data-icon);
		margin-right: 1rem;
	}
`

export const ListContainer = styled.div`
	width: 260px;
	height: 220px;
	display: flex;
	justify-content: center;
	align-items: center;
`
