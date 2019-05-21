import styled from 'styled-components';

export const NavBar = styled.div`
	height: 50px;
	width: 100%;
	background: linear-gradient(#102742, #171133);
	position: relative;

	.nav-header {
		display: inline;
		.nav-title {
			display: inline-block;
			font-size: 22px;
			padding: 12px;
			a {
				text-decoration: none;
				color: #efefef;
				:hover {
					color: #d2d7d9;
					opacity: 0.9;
				}
			}
		}
	}

	.nav-btn {
		display: none;
	}

	.nav-links {
		display: inline;
		float: right;
		font-size: 18px;
		a {
			display: inline-block;
			margin: 13px 10px 13px 10px;
			text-decoration: none;
			color: #efefef;
			:hover {
				color: #d2d7d9;
				opacity: 0.9;
			}
		}
	}

	#nav-check {
		display: none;
	}

	@media (max-width: 600px) {
		.nav-btn {
			display: inline-block;
			position: absolute;
			right: 0px;
			top: 0px;
			label {
				display: inline-block;
				width: 50px;
				height: 50px;
				padding: 13px;
			}
		}
		label:hover,
		#nav-check:checked ~ .nav-btn > label {
			background-color: rgba(0, 0, 0, 0.3);
		}
		.nav-btn > label > span {
			display: block;
			width: 25px;
			height: 10px;
			border-top: 2px solid #eee;
		}
		.nav-links {
			position: absolute;
			display: block;
			width: 100%;
			text-align: center;
			background: linear-gradient(#171133, #102742);
			height: 0px;
			transition: all 0.3s ease-in;
			overflow-y: hidden;
			top: 50px;
			left: 0px;
		}
		.nav-links > a {
			display: block;
			width: 100%;
		}
		#nav-check:not(:checked) ~ .nav-links {
			height: 0px;
		}
		#nav-check:checked ~ .nav-links {
			height: calc(100vh - 50px);
			overflow-y: auto;
		}
	}
`;
