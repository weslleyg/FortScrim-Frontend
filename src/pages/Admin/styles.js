import styled from 'styled-components';

export const Content = styled.div`
	display: flex;
	justify-content: center;
	@media screen and (max-width: 800px) {
		display: flex;
		justify-content: center;
	}
`;

export const Conteudo = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 50%;
	height: 90.3vh;
	text-align: center;
	h1 {
		margin: 12px;
		font-weight: bolder;
	}
	p {
		font-size: 22px;
		a {
			text-decoration: none;
			color: #355999;
			:hover {
				opacity: 0.8;
			}
		}
	}
`;
