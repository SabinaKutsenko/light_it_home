import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import CSSModules from 'react-css-modules';
import { func, object } from "prop-types";
import styles from "../../sass/main.module.scss";

import { fetchAuth } from "../../saga/auth/auth.action";
import LoginForm from './LoginForm';

import AuthPageWrapper from "./auth_hoc";

class Login extends Component {
	static propTypes = {
		error: object,
		fetchAuth: func,
	}

	renderError = (error) => {
		for (const item in error) {
			return (<div>{error[item]}</div>);
		}
	}

	render() {
		const { error, fetchAuth } = this.props;

		return (
			<Fragment>
				<LoginForm function={fetchAuth} />
				{(error !== {}) && <div styleName="error">{ this.renderError(error) }</div> }
			</Fragment>
		);
	}
}

const mapStateToProps = ({ auth }) => ({
	error: auth.error
});

const mapDispatchToProps = (dispatch) => ({
	fetchAuth: (data) => dispatch(fetchAuth(data))
});

export default AuthPageWrapper(connect(mapStateToProps, mapDispatchToProps)(CSSModules(Login, styles)), fetchAuth);
