import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CSSModules from 'react-css-modules';
import { func, object } from "prop-types";
import styles from "../../sass/main.module.scss";

import { fetchAuth } from "../../saga/auth/auth.action";
import LoginForm from './LoginForm';


//Create form component
class Form extends Component {
	static propTypes = {
		fetchAuth: func
	}

	submit = (values) => {
		const { fetchAuth } = this.props;
		fetchAuth(values);
	}

	render() {
		return (
			<LoginForm onSubmit={this.submit} />
		);
	}
}


class Login extends Component {
	static propTypes = {
		error: object,
		fetchAuth: func,
	}

	renderError = (error) => {
		for(let item in error) {	
			return (<div>{error[item]}</div>);
		}
	}

	render() {
		const { error } = this.props;

		return (
			<Fragment>
				<section styleName="contentMain">
					<div styleName="loginPageImg" />
				</section>

				<section styleName="contentSidebar">
					<img styleName="logo logoSizeL" src="../src/assets/images/logo_white.png" alt="Logo" />
					<div styleName="authorizBlock">

						<div styleName="tabs mrgnBottomLg">
							<Link to={`/login`} styleName="btn btnSm">Sign In</Link>
							<Link to={`/register`} styleName="btn btnSm">Sign Up</Link>
						</div>
						<div> email: sabina.kutsenko@gmail.com </div>
						<div> pass: qwe123qwe</div>
						<Form fetchAuth={this.props.fetchAuth} />
						{(error !== {}) && <div className="error">{ this.renderError(error) }</div> }
					</div>
				</section>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ auth }) => ({
	authInfo: auth.authInfo,
	error: auth.error
});

const mapDispatchToProps = (dispatch) => ({
	fetchAuth: (data) => dispatch(fetchAuth(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Login, styles, { allowMultiple: true }));
