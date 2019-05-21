import styled from 'styled-components';

export const Content = styled.div`
	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
	}
`;

export const Lista = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 12px;
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		font-size: 20px;
		li {
			display: flex;
			justify-content: space-around;
			align-items: center;
			list-style: none;
			border: 1px solid #cdcdcd;
			width: 40%;
			padding: 6px;
			margin: 4px;
			background: #f1f1f1;
			:hover {
				box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
			}
		}
	}
	@media screen and (max-width: 800px) {
		ul {
			li {
				width: 80%;
			}
		}
	}
`;