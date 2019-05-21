import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { isAuthenticated, isAdmin, logout } from '../../services/auth';

import { NavBar } from './styles';

export default class Navbar extends Component {
	render() {
		return (
			<NavBar>
				<input type="checkbox" id="nav-check" />
				<div className="nav-header">
					<div className="nav-title">
						<a href="/">FortScrim</a>
					</div>
				</div>
				<div className="nav-btn">
					<label htmlFor="nav-check">
						<span />
						<span />
						<span />
					</label>
				</div>

				<div className="nav-links">
					{isAuthenticated() ? !<Link to="/signin">Entrar</Link> : <Link to="/signin">Entrar</Link>}
					{isAuthenticated() ? !<Link to="/signup">Criar conta</Link> : <Link to="/signup">Criar conta</Link>}
					{isAuthenticated() ? <Link to="/torneios">Torneios</Link> : !<Link to="/torneios">Torneios</Link>}
					{isAuthenticated() ? <Link to="/blog">Blog</Link> : !<Link to="/blog">Blog</Link>}
					{isAuthenticated() ? (
						isAdmin() === true && <Link to="/admin">Admin</Link>
					) : (
						!<Link to="/admin">Admin</Link>
					)}
					{isAuthenticated() && (
						<a
							onClick={() => {
								logout();
							}}
							href="/"
						>
							Logout
						</a>
					)}
				</div>
			</NavBar>
		);
	}
}
