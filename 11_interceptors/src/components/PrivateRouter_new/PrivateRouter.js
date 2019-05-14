import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { string, any, bool } from "prop-types";

export const PrivateRoute = ({ component: Component, ...rest }) => {

	class Authentication extends Component {
		static propTypes = {
			isAuthenticated: bool
		};


		handleRender = props => {
			this.props.isAuthenticated ?
			<ComposedComponent {...props} {...rest} /> :
			<Redirect to='/login' />
		}

		render() {
			return ( 
				<Route {...rest} render={this.handleRender} /> 
			)
		}
	}
	const mapStateToProps = ({ auth }) => ({
		isAuthenticated: auth.auth
	});

	const AuthenticationContainer = connect(mapStateToProps)(Authentication);
	return <AuthenticationContainer />

}

