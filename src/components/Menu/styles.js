import styled from 'styled-components';

export const MenuBar = styled.div`
	display: flex;
	align-items: center;
	ul {
		display: flex;
		align-items: center;
		flex-direction: row;
		background: #333;
		text-align: center;
		height: 100%;
		width: 100%;
	}

	li {
		padding: 12px;
		list-style: none;
		:hover {
			background: #222223;
		}
		a {
			text-decoration: none;
			color: #fff;
			:hover {
				opacity: 0.8;
			}
		}
	}

	@media screen and (max-width: 800px) {
		ul {
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;
		}
	}
`;
