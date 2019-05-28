import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons';
import CSSModules from "react-css-modules";
import styles from "./sass/main.module.scss";

import PrivateRoute from "./components/PrivateRouter/PrivateRouter";
import Header from "./components/Header/Header";
/*import Footer from "./components/Footer/Footer";*/
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProductPage from "./pages/Product/ProductPage";
import AddProductPage from "./pages/AddProduct/AddProductPage";
import NotFound from "./pages/NotFound/NotFound";
import SearchResult from "./pages/SearchResult/SearchResult";
import Loader  from "./components/Loader/Loader";

import { fetchAuthCheckToken } from "./saga/auth/auth.action";
import { ThemeContext, themes } from './theme-context';
library.add(faSignOutAlt, faLongArrowAltRight);

const Footer = lazy(() => {
	return Promise.all([
    import("./components/Footer/Footer"),
    new Promise((resolve) => setTimeout(resolve, 5000))
	])
		.then(([moduleExports]) => moduleExports);
});

interface StoreStates {
	auth: boolean,
	loading: boolean
}

interface fetchAuthOutDispatch {
	fetchAuthCheckToken: () => void,
}

class App extends Component<StoreStates & fetchAuthOutDispatch> {
	componentDidMount() {
		const { fetchAuthCheckToken }: any = this.props;
		const token = localStorage.getItem('token');

		if (token) {
			fetchAuthCheckToken();
		}
	}

	render() {
		const { loading, auth } : any = this.props;
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
					<ThemeContext.Provider value={auth ? themes.dark : themes.light}>

						<Suspense
							fallback={
								<div
									style={{
										backgroundColor: '#23484a',
										gridColumn: '1 / -1',
										textAlign: 'center',
										overflow: 'hidden'
									}}
								>
									<img src="../src/assets/images/loader3.gif" alt={"loading"} /></div>
							}
						>
							<Footer />
						</Suspense>
					</ThemeContext.Provider>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ products, auth } : any) : StoreStates => ({
	loading: products.loading,
	auth: auth.auth
});

const mapDispatchToProps = (dispatch: any) => ({
	fetchAuthCheckToken: () => dispatch(fetchAuthCheckToken())
});

export default withRouter(connect<StoreStates, fetchAuthOutDispatch, any>(mapStateToProps, mapDispatchToProps)(CSSModules(App, styles)));
