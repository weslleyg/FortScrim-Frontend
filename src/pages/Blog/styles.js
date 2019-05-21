import styled from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;

	.row:after {
		content: '';
		display: table;
		clear: both;
	}

	.leftcolumn {
		float: left;
		width: 75%;
	}

	.rightcolumn {
		float: left;
		width: 25%;
		padding: left;
	}

	@media screen and (max-width: 800px) {
		.leftcolumn,
		.rightcolumn {
			width: 100%;
			padding: 0;
		}
	}
`;

export const Footer = styled.footer`
	color: #fff;
	position: relative;
	bottom: 0;
	width: 100%;
	margin-top: 30px;
	padding: 29px;
	text-align: center;
	cursor: default;
	background: linear-gradient(#102742, #171133);
`;

export const Card = styled.div`
	background-color: #d2d7d9;
	border-radius: 8px;
	padding: 20px;
	margin: 40px;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
	h2 {
		color: #102742;
	}
	h5 {
		color: #222;
		margin: 12px;
	}
	.rightimg {
		height: 100px;
		background-color: #aaa;
		width: 100%;
		padding: 20px;
	}
	.leftimg {
		height: 200px;
		background-color: #aaa;
		width: 100%;
		padding: 20px;
	}
`;
