import React, { Component } from 'react';
import Menu from '../../../../components/Menu';

import { Content } from './styles';

import { Form, Input } from '@rocketseat/unform';

import api from '../../../../services/api';

export default class EditTorneios extends Component {
	state = {
		torneio: {}
	};

	async componentDidMount() {
		const response = await api.get(`torneio/${this.props.match.params.id}`);

		this.setState({
			torneio: response.data
		});
	}

	handleSubmit = async (data, { resetForm }) => {
		const torneio = this.props.match.params;
		await api.put(`/torneio/${torneio.id}`, data);
		resetForm();
	};

	render() {
		return (
			<Content>
				<Menu />
				<Form initialData={this.state.torneio} onSubmit={this.handleSubmit}>
					<div className="Input">
						<Input name="name" placeholder="Insira o nome do torneio" />
						<Input name="plataforma" placeholder="Insira a Plataforma" />
						<Input name="modo" placeholder="Insira o modo" />
						<Input name="vagas" placeholder="Insira o número de vagas" />
						<Input name="dataJogo" placeholder="Data do torneio" />
						<Input name="link" placeholder="Link" />
						<Input name="taxa" placeholder="Valor ex: 12,00" />
						<button type="submit">Publicar</button>
					</div>
				</Form>
			</Content>
		);
	}
}
