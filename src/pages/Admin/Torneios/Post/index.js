import React, { Component } from 'react';
import Menu from '../../../../components/Menu';

import { Content } from './styles';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../../../services/api';

const schema = Yup.object().shape({
	name: Yup.string().required('Torneio precisa de um título!'),
	plataforma: Yup.string().required('Insira a plataforma do torneio!'),
	modo: Yup.string().required('Insira o modo de jogo!'),
	vagas: Yup.string().required('Insira o número de vagas!'),
	dataJogo: Yup.string().required('Insira a data!'),
	link: Yup.string().required('Insira o link para cadastro!'),
	taxa: Yup.string().min(3).required('Insira o valor da taxa!')
});

export default class PostTorneios extends Component {
	handleSubmit = async (data, { resetForm }) => {
		await api.post('/torneio', data);
		resetForm();
	};

	render() {
		return (
			<Content>
				<Menu />
				<Form schema={schema} onSubmit={this.handleSubmit}>
					<div className="Input">
						<Input name="name" placeholder="Insira o nome do torneio" />
						<Input name="plataforma" placeholder="Insira a Plataforma" />
						<Input name="modo" placeholder="Insira o modo" />
						<Input name="vagas" placeholder="Insira o número de vagas" />
						<Input name="dataJogo" placeholder="Data do torneio dd/mm" />
						<Input name="link" placeholder="Link" />
						<Input name="taxa" placeholder="Valor ex: 12,00" />
						<button type="submit">Publicar</button>
					</div>
				</Form>
			</Content>
		);
	}
}
