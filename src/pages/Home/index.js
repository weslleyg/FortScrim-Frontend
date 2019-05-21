import React, { Component } from 'react';
import imagem from './background.png';

import { Content } from './styles';

export default class Home extends Component {
	render() {
		return (
			<Content img={imagem}>
				<div />
			</Content>
		);
	}
}
