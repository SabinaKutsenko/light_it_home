import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bool, func } from "prop-types";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons';
import CSSModules from "react-css-modules";
import styles from "./sass/main.module.scss";

import PrivateRoute from "./components/PrivateRouter/PrivateRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./containers/Home/HomePage";
import LoginPage from "./containers/Auth/LoginPage";
import RegisterPage from "./containers/Auth/RegisterPage";
import ProfilePage from "./containers/Profile/ProfilePage";
import ProductPage from "./containers/Product/ProductPage";
import AddProductPage from "./containers/AddProduct/AddProductPage";
import NotFound from "./containers/NotFound";
import SearchResult from "./containers//SearchResult/SearchResult";
import Loader  from "./components/Loader";

import { fetchAuthCheckToken } from "./saga/auth/auth.action";

library.add(faSignOutAlt, faLongArrowAltRight);

class App extends Component {
	static propTypes = {
		fetchAuthCheckToken: func,
		auth: bool,
		loading: bool
	}


	render() {
		const { loading, auth, fetchAuthCheckToken } = this.props;

		const token = localStorage.getItem('token');	

		if(token) {
			fetchAuthCheckToken(token);
		}

		return (
			<div>
				{ (loading) && <Loader /> }

				<div styleName="containerRoot">
					<Header />

					<Switch>
						<Route exact path={"/login"} render={() => <LoginPage />} />
						<Route exact path={"/register"} render={() => <RegisterPage />} />
						<Route exact path={"/not-found"} render={() => <NotFound />} />
						<Route exact path={"/search_result"} render={(props) => <SearchResult {...props} />} />
				

						<PrivateRoute
							exact
							path={"/"}
							state={auth}
							to={"/login"}
							component={HomePage}
						/>
						<PrivateRoute
							exact
							path={"/product/:id"}
							state={auth}
							to={"/login"}
							component={ProductPage}
						/>
						<PrivateRoute
							exact
							path={"/add_product"}
							state={auth}
							to={"/login"}
							component={AddProductPage}
						/>
						<PrivateRoute
							exact
							path={"/profile"}
							state={auth}
							to={"/login"}
							component={ProfilePage}
						/>
					</Switch>
					<Footer />
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ products, auth }) => ({
	loading: products.loading,
	auth: auth.auth
});

const mapDispatchToProps = (dispatch) => ({
	fetchAuthCheckToken: (data) => dispatch(fetchAuthCheckToken(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CSSModules(App, styles)));
