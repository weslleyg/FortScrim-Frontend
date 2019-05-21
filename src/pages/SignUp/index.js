import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Button, Campo, Password } from './styles';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import api from '../../services/api';
import { login } from '../../services/auth';

const schema = Yup.object().shape({
	username: Yup.string().min(4, 'Mínimo de 4 caracteres!').required('Requer um nome de usuário!'),
	email: Yup.string().email('E-mail inválido!').required('Requer um e-mail!'),
	password: Yup.string().min(4, 'Mínimo de 4 caracteres!').required('Requer uma senha!')
});

export default class SignUp extends Component {
	state = {
		error: ''
	};
	handleSubmit = async (data) => {
		if (!data.username || !data.email || !data.password) {
			this.setState({
				error: 'Preencha nome, e-mail e senha para continuar!'
			});
		} else {
			try {
				const response = await api.post('/signup', data);
				login(response.data.token);
				this.props.history.push('/');
				window.location.reload('');
			} catch (err) {
				this.setState({
					error: 'Houve um problema ao cadastrar, verifique suas credenciais. T.T'
				});
			}
		}
	};

	render() {
		return (
			<Container>
				<Form schema={schema} onSubmit={this.handleSubmit} className="content">
					{this.state.error && <p>{this.state.error}</p>}
					<Campo>
						<FaUser className="Icone" />
						<Input name="username" placeholder="Insira o nome de usuario" />
					</Campo>
					<Campo>
						<MdEmail className="Icone" />
						<Input name="email" placeholder="Insira seu e-mail" />
					</Campo>
					<Password>
						<FaLock className="FaLock" />
						<Input name="password" type="password" placeholder="Insira sua senha" />
					</Password>
					<Button type="submit">Cadastrar</Button>
					<hr />
					<Link to="/signin">Fazer Login</Link>
				</Form>
			</Container>
		);
	}
}
