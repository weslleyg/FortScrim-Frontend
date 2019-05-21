import React, { Component } from 'react';
import Menu from '../../components/Menu';

import { Link } from 'react-router-dom';

import { Content, Conteudo } from './styles';

export default class AdminIndex extends Component {
	render() {
		return (
			<>
			<Menu />
			<Content>
				
				<Conteudo>
					<h1>Painel de Adminitração</h1>
					<p>Faça uma <Link to='admin/torneios/post'>postagem</Link> de um novo torneio, 
					ou abra a <Link to='admin/torneios'>lista de torneios</Link> para editar ou 
					excluir um torneio existente, veja também a <Link to='admin/users'>lista de usuários </Link>
					para gerenciar os usuários cadastrados</p>
				</Conteudo>
			</Content>
			</>
		);
	}
}
