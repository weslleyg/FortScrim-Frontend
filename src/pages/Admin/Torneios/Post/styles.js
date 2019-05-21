import styled from 'styled-components';

export const Content = styled.div`
	.Input {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 12px;
		input {
			margin: 10px 40px;
			padding: 12px;
			width: 80%;
			border: none;
			border-radius: 4px;
			&::placeholder {
				color: #444;
			}
			:focus {
				border: 1px solid blue;
			}
		}
		span {
			color: #ff3333;
		}
		button {
			padding: 14px;
			margin: 10px 40px;
			width: 80%;
			background: #222;
			color: #fff;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			:hover {
				opacity: 0.9;
			}
		}
	}

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
	}
`;
