import styled from 'styled-components';

export const Content = styled.div`
	background-image: url(${(props) => props.img});
	width: 100%;
	height: 94.8vh;
	background-size: cover;
	div {
		background-color: rgba(0, 0, 0, 0.7);
		height: 100%;
	}
`;
