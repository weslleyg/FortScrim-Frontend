import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MenuBar } from './styles';

export default class Menu extends Component {
	render() {
		return (
			<MenuBar>
				<ul>
					<li>
						<Link to="/admin/torneios/post">Postar Torneio</Link>
					</li>
					<li>
						<Link to="/admin/torneios">Torneios</Link>
					</li>
					<li>
						<Link to="/admin/users">Usuários</Link>
					</li>
				</ul>
			</MenuBar>
		);
	}
}
