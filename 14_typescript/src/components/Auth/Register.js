import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import CSSModules from 'react-css-modules';
import { func, object } from "prop-types";
import styles from "../../sass/main.module.scss";

import { fetchAuthUp } from "../../saga/auth/auth.action";

import RegisterForm from './RegisterForm';
import AuthPageWrapper from "./auth_hoc";


class Register extends Component {
	static propTypes = {
		error: object,
		fetchAuthUp: func,
	}

	renderError = (error) => {
		for (const item in error) {
			return (<div>{error[item]}</div>);
		}
	}

	render() {
		const { error, fetchAuthUp } = this.props;

		return (
			<Fragment>
				<RegisterForm function={fetchAuthUp} />
				{(error !== {}) && <div styleName="error">{ this.renderError(error) }</div> }
			</Fragment>
		);
	}
}

const mapStateToProps = ({ auth }) => ({
	error: auth.error
});

const mapDispatchToProps = (dispatch) => ({
	fetchAuthUp: (data) => dispatch(fetchAuthUp(data))
});

export default AuthPageWrapper(connect(mapStateToProps, mapDispatchToProps)(CSSModules(Register, styles)), fetchAuthUp);
