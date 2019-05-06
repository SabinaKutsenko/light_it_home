import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bool } from "prop-types";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons';
import CSSModules from "react-css-modules";
import styles from "./sass/main.module.scss";

import PrivateRoute from "./components/PrivateRouter/PrivateRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./containers/HomePage/HomePage";
import LoginPage from "./containers/LoginPage/LoginPage";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import ProductPage from "./containers/ProductPage/ProductPage";
import Loader  from "./components/Loader/Loader";

library.add(faSignOutAlt, faLongArrowAltRight);

class App extends Component {
	static propTypes = {
		auth: bool,
		loading: bool
	}

	render() {
		const { loading, auth } = this.props;

		return (
			<div>
				{ (loading) && <Loader /> }

				<div styleName="containerRoot">
					<Header />
					<Switch>
						<Route exact path={"/login"} render={() => <LoginPage />} />
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

const mapStateToProps = ({ loader, auth }) => ({
	loading: loader.loading,
	auth: auth.auth
});

export default withRouter(connect(mapStateToProps)(CSSModules(App, styles)));
