import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { array, func, bool } from "prop-types";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons';
import styles from "./sass/main.module.scss";

import { fetchProduct } from "./thunk/app/app.action";
/*import { fetchProduct } from "./saga/products/products.action";
import { fetchLoader } from "./saga/loader/loader.action";*/

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Product from "./components/Product/Product";
import LoginPage from "./components/LoginPage/LoginPage";
import LoaderContainer  from "./components/Loader/Loader";

library.add(faSignOutAlt, faLongArrowAltRight);

class App extends Component {
	static propTypes = {
		fetchProduct: func,
		isLoading: bool,
		posts: array
	}

	componentDidMount() {
		this.props.fetchProduct();
	/*	this.props.fetchLoader(true);*/
	}

	render() {
		const { posts, isLoading } = this.props;
		return (
			<div>
				{ (!isLoading) && <LoaderContainer /> }

				<div className={`${styles.containerRoot}`}>
					<Header />
					<Switch>dsds
						<Route exact path={"/"} render={() => <HomePage posts={posts} />} />
						<Route
							path={"/homepage/:id"} render={
								(props) => <Product {...props} post={posts[props.match.params.id]} posts={posts} />
							}
						/>
						<Route exact path={"/login"} render={() => <LoginPage />} />
					</Switch>
					<Footer />
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ app }) => ({
	posts: app.productsList,
	isLoading: app.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
	fetchProduct: () => dispatch(fetchProduct())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));