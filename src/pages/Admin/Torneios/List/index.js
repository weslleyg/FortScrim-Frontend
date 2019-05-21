import React, { Component } from 'react';
import Menu from '../../../../components/Menu';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';
import socket from 'socket.io-client';

import { Content, Lista } from './styles';
import { FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

export default class ListTorneios extends Component {
	state = {
		torneios: []
	};

	async componentDidMount() {
		this.subscribeNew();

		const response = await api.get(`torneio`);

		this.setState({
			torneios: response.data
		});
	}

	subscribeNew = () => {
		const io = socket('http://localhost:3333');

		io.on('torneio', (data) => {
			this.setState({
				torneios: [ data, ...this.state.torneios ]
			});
		});
	};

	render() {
		return (
			<Content>
				<Menu />
				<Lista>
					<ul>
						{this.state.torneios.map((torneio) => (
							<li key={torneio._id}>
								<Link to={`torneios/${torneio._id}`}>
									<FaPencilAlt className="pen" />
								</Link>
								<Link to={`torneios/${torneio._id}`}>
									<strong>{torneio.name}</strong>
								</Link>
								<MdDelete
									className="icon"
									onClick={async () => {
										await api.delete(`torneio/${torneio._id}`);
										window.location.reload();
									}}
								/>
							</li>
						))}
					</ul>
				</Lista>
			</Content>
		);
	}
}
