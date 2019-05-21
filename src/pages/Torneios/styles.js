import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
	transition: 0.3s;
	margin: 15px;
	color: #222;
	hr {
		margin: 0 8px;
		border: none;
		border-bottom: 1px solid #002278;
	}
	h1 {
		background: -webkit-linear-gradient(#102742, #039);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: 12px 18px;
	}
	width: 40%;
	height: 250px;
	border-radius: 5px;
	border: 1px solid #002278;
	:hover {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		border: 1px solid #f56e64;
	}

	@media screen and (max-width: 800px) {
		width: 80%;
		padding: 0;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 2px 16px;
	width: 100%;
	div {
		margin: 16px;
		text-align: center;
		font-size: 28px;
		p {
			position: relative;
			padding: 0;
			color: #039;
			text-decoration: none;
			cursor: help;
			z-index: 24;
			span {
				display: none;
			}
			:hover {
				opacity: 0.9;
				color: #bf6b72;
				background: transparent;
				z-index: 25;
				span {
					display: block;
					position: absolute;
					width: 110px;
					font-size: 18px;
					top: 0em;
					text-align: justify;
					left: 6em;
					padding: 5px 10px;
					border: 1px solid #999;
					background: #e8ebf2;
					color: #000;
				}
			}
		}
		a {
			position: relative;
			padding: 0;
			color: #039;
			text-decoration: none;
			cursor: pointer;
			z-index: 24;
			span {
				display: none;
			}
			:hover {
				opacity: 0.9;
				color: #bf6b72;
				background: transparent;
				z-index: 25;
				span {
					display: block;
					position: absolute;
					width: 110px;
					font-size: 18px;
					top: 0em;
					text-align: justify;
					left: 6em;
					padding: 5px 10px;
					border: 1px solid #999;
					background: #e8ebf2;
					color: #000;
				}
			}
		}
	}

	@media screen and (max-width: 800px) {
		width: 100%;
		padding: 0;
		div {
			margin: 10px;
			font-size: 22px;
			a {
				text-decoration: none;
				color: #039;
			}
		}
	}
`;
