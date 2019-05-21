import React, { Component } from 'react';
import Menu from '../../../components/Menu';

import api from '../../../services/api';
import socket from 'socket.io-client';

import { Content, Lista } from './styles';

export default class ListUsers extends Component {
	state = {
		usuarios: []
	};

	async componentDidMount() {
		this.subscribeNew();

		const response = await api.get(`users`);

		this.setState({
			usuarios: response.data
		});
	}

	subscribeNew = () => {
		const io = socket('http://localhost:3333');

		io.on('users', (data) => {
			this.setState({
				usuarios: [ data, ...this.state.usuarios ]
			});
		});
	};

	render() {
		return (
			<Content>
				<Menu />
				<Lista>
					<ul>
						{this.state.usuarios.map((user) => (
							<li key={user._id}>
								<strong>{user.username}</strong>
								<p>{user.roles}</p>
							</li>
						))}
					</ul>
				</Lista>
			</Content>
		);
	}
}
