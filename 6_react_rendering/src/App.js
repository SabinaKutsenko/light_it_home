import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Product from "./components/Product/Product";
import LoginPage from "./components/LoginPage/LoginPage";

import "./sass/main.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


library.add(faSignOutAlt);



let data = require('../db/products.json');

class App extends Component {
	state = {
		posts: []
	}

	async componentDidMount() {
		try {
			/*let result = await fetch('https://jsonplaceholder.typicode.com/posts/');*/
			
			let result = data;

			this.setState({
				posts: result
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const { posts } = this.state;
		return (
			<>
				
				<div className="container-root container-root__page_login">
					<Header />
					<Switch>
						<Route exact path={"/"} render={() => <HomePage posts={posts} />} />
						<Route
							path={"/homepage/:id"} render={
								(props) => <Product {...props} post={posts[props.match.params.id]} posts={posts} />
							}
						/>
						<Route exact path={"/login"} render={() => <LoginPage /> } />
	
					</Switch>
					<Footer />
				</div>
			</>
		);
	}
}

export default withRouter(App);
