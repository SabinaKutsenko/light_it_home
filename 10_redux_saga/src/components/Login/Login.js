import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CSSModules from 'react-css-modules';
import { func, string } from "prop-types";
import styles from "../../sass/main.module.scss";

import { fetchAuth } from "../../saga/auth/auth.action";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


//Create form component
class Form extends Component {
	static propTypes = {
		fetchAuth: func,
		signForm: string
	}

	// Function for sending request by submitting active form
	submit = (values) => {
		const { fetchAuth, signForm } = this.props;

		(signForm === "signIn") ?
			fetchAuth(values)
			:
			console.log(values); // registration form will be complete later
	}

	// Render active form
	render() {
		const { signForm } = this.props;
		return (
			(signForm === "signIn") ?
				<LoginForm onSubmit={this.submit} />
				:
				<RegisterForm onSubmit={this.submit} />
		);
	}
}


class Login extends Component {
	static propTypes = {
		error: string,
		fetchAuth: func,
	}

	state = {
		signForm: 'signIn',
	};

	// Function is setting state for active form
	setForm = (val) => () => {
		this.setState(() => ({ signForm: val }));
	}

	render() {
		const { signForm } = this.state;
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
							<button onClick={this.setForm("signIn")} styleName="btn btnSm">Sign In</button>
							<button onClick={this.setForm("signUp")} styleName="btn btnSm">Sign Up</button>
						</div>
						<div> email: anna@gmail.com </div>
						<div> pass: 1234</div>
						<Form fetchAuth={this.props.fetchAuth} signForm={signForm} />
						{(error != '') && <div className="error">{ error }</div> }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CSSModules(Login, styles, { allowMultiple: true })));
