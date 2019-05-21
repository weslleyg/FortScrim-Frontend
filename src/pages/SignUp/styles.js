import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90vh;

	Form {
		width: 400px;
		background: linear-gradient(#102742, #171133);
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid #444;
		text-align: center;

		span {
			color: #ff3333;
			padding: 10px;
			width: 100%;
			text-align: center;
		}

		p {
			color: #ff3333;
			margin-bottom: 15px;
			border: 1px solid #ff3333;
			padding: 10px;
			width: 100%;
			text-align: center;
		}
		hr {
			margin: 20px 0;
			border: none;
			border-bottom: 1px solid #cdcdcd;
			width: 100%;
			cursor: default;
			:hover {
				border-bottom: 1px solid #f26863;
			}
		}
		a {
			font-size: 16;
			font-weight: bold;
			color: #eee;
			text-decoration: none;
			:hover {
				opacity: 0.8;
			}
		}
	}
`;

export const Campo = styled.div`
	width: 100%;
	overflow: hidden;
	padding: 8px 0;
	input {
		border: none;
		outline: none;
		background: none;
		padding: 16px;
		font-size: 18px;
		width: 92%;
		float: left;
		color: white;
		border-bottom: 1px solid #cdcdcd;
		&::placeholder {
			color: #eee;
		}
	}
	.Icone {
		margin-top: 12px;
		font-size: 20px;
		float: left;
		text-align: center;
		color: #f26863;
	}
`;

export const Password = styled.div`
	width: 100%;
	overflow: hidden;
	padding: 8px 0;
	input {
		border: none;
		outline: none;
		background: none;
		padding: 16px;
		font-size: 18px;
		width: 92%;
		float: left;
		color: white;
		border-bottom: 1px solid #cdcdcd;
		&::placeholder {
			color: #eee;
		}
	}
	.FaLock {
		margin-top: 13px;
		font-size: 20px;
		float: left;
		text-align: center;
		color: #f26863;
	}
`;

export const Button = styled.button`
	color: #fff;
	font-size: 16px;
	background: #f26863;
	height: 56px;
	border: 0;
	border-radius: 5px;
	margin: 10px;
	width: 100%;
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`;
