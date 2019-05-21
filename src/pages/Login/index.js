import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import { Container, Button, Email, Password } from './styles';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import api from '../../services/api';
import { login } from '../../services/auth';

const schema = Yup.object().shape({
	email: Yup.string().email('E-mail inválido!').required('Requer um e-mail!'),
	password: Yup.string().min(4, 'Mínimo 4 caracteres!').required('Requer uma senha!')
});

export default class Login extends Component {
	state = {
		error: ''
	};

	handleSubmit = async (data) => {
		try {
			const response = await api.post('/login', data);
			login(response.data.token);
			this.props.history.push('/');
			window.location.reload('');
		} catch (err) {
			this.setState({
				error: 'Houve um problema com o login, verifique suas credenciais. T.T'
			});
		}
	};

	render() {
		return (
			<Container>
				<Form schema={schema} onSubmit={this.handleSubmit} className="contentForm">
					{this.state.error && <p>{this.state.error}</p>}
					<Email>
						<div>
							<MdEmail className="Icone" />
							<Input name="email" placeholder="Insira seu e-mail" />
						</div>
					</Email>
					<Password>
						<FaLock className="FaLock" />
						<Input name="password" type="password" placeholder="Insira sua senha" />
					</Password>
					<Button type="submit">Entrar</Button>
					<hr />
					<Link to="/signup">Criar conta grátis</Link>
				</Form>
			</Container>
		);
	}
}
