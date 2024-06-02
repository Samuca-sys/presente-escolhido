import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	flex-direction: column;

	margin: 2rem 0;

	input,
	button {
		color: var(--black);
		font-family: var(--font-cursive);
		height: 50px;
		background: transparent;
	}

	button {
		border-radius: 25px;
		border: 1px dashed var(--black);
		margin-left: 1rem;
		padding: 0 1rem;
		cursor: pointer;
		&:hover {
			color: #b9c0a2;
			border: 2px dashed #b9c0a2;
		}
	}

	input {
		appearance: none;
		border-radius: 0;
		background-color: transparent;
		border: 0;
		border-bottom: 1px solid var(--black);
		font-size: 1.125rem;
		padding-left: 0.25rem;

		&:focus,
		&:valid {
			outline: 0;
			border-bottom-color: #b9c0a2;
		}
	}

	input[name='gift'] {
	}
`
