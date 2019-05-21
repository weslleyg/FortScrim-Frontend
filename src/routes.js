import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Services de autenticação
import { isAuthenticated, isAdmin } from './services/auth';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Torneios from './pages/Torneios';

//Barra de navegação
import Navbar from './components/Navbar';

//Admin Routes
import AdminIndex from './pages/Admin';
// Torneios
import PostTorneios from './pages/Admin/Torneios/Post';
import ListTorneios from './pages/Admin/Torneios/List';
import EditTorneios from './pages/Admin/Torneios/Edit';
// Lista usuarios
import ListUsers from './pages/Admin/Users';

//Autenticação para usuários
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
			)}
	/>
);

//Autenticação para administrador
const Admin = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated() ? isAdmin() === true ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			) : (
				<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
			)}
	/>
);

//Rotas
const Routes = () => (
	<BrowserRouter>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/signin" component={Login} />
			<Route path="/signup" component={SignUp} />
			<Admin path="/admin/torneios/post" component={PostTorneios} />
			<Admin path="/admin/torneios/:id" component={EditTorneios} />
			<Admin path="/admin/torneios" component={ListTorneios} />
			<Admin path="/admin/users" component={ListUsers} />
			<Admin path="/admin" component={AdminIndex} />
			<PrivateRoute path="/torneios" component={Torneios} />
			<PrivateRoute path="/blog" component={Blog} />
			<Route path="*" component={() => <Redirect to="/" />} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
