import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Container, Footer, Card } from './styles';

export default class Blog extends Component {
	render() {
		return (
			<Container>
				<div className="row">
					<div className="leftcolumn">
						<ul>
							<li>
								<Card>
									<h2>Title Heading</h2>
									<h5>Title description, Sep 17, 2000</h5>
									<div className="leftimg">Image</div>
									<p>Some text..</p>
									<p>
										Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
										adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
									</p>
									<Link to="">Ler mais</Link>
								</Card>
							</li>
							<li>
								<Card>
									<h2>Title Heading</h2>
									<h5>Title description, Sep 17, 2000</h5>
									<div className="leftimg">Image</div>
									<p>Some text..</p>
									<p>
										Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
										adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
									</p>
									<Link to="">Ler mais</Link>
								</Card>
							</li>
						</ul>
					</div>

					<div className="rightcolumn">
						<Card>
							<h2>About me</h2>
							<div className="rightimg">Image</div>
							<p>Some text about me</p>
						</Card>
						<Card>
							<h3>Follow Me</h3>
							<p>Some text..</p>
						</Card>
					</div>
				</div>
				<Footer>Teste</Footer>
			</Container>
		);
	}
}
