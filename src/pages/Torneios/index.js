import React, { Component } from 'react';

import { Card, Container, Content } from './styles';
import { GiCalendar, GiMoneyStack, GiConsoleController, GiTicket, GiThreeFriends, GiSwordwoman } from 'react-icons/gi';

import api from '../../services/api';
import socket from 'socket.io-client';

export default class Torneios extends Component {
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
			<ul>
				{this.state.torneios.map((torneio) => (
					<li key={torneio._id}>
						<Container>
							<Card>
								<h1>
									<b>{torneio.name}</b>
								</h1>
								<hr />
								<Content>
									<div>
										<GiConsoleController color="#435964" />
										<p>
											{torneio.plataforma} <span>Plataforma</span>
										</p>

										<GiSwordwoman color="#F26863" />
										<p>
											{torneio.modo} <span>Modo</span>
										</p>
									</div>
									<div>
										<GiThreeFriends color="#51768C" />
										<p>
											{torneio.vagas} <span>Vagas</span>
										</p>

										<GiCalendar color="#A6988B" />
										<p>
											{torneio.dataJogo} <span>Data</span>
										</p>
									</div>
									<div>
										<GiMoneyStack color="green" />
										<p>
											R$ {torneio.taxa} <span>Taxa</span>
										</p>

										<GiTicket color="#BF6B72" />
										<br />
										<a href={torneio.link}>
											Participar<span>Participar</span>
										</a>
									</div>
								</Content>
							</Card>
						</Container>
					</li>
				))}
			</ul>
		);
	}
}
