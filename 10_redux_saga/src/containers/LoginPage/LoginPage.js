import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { bool } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

import Login from "../../components/Login/Login";

class LoginPage extends Component {
	static propTypes = {
		auth: bool
	}

	render() {
		const { auth } = this.props;
		// Is Authenticated.
		if (auth) {
			return <Redirect to="/" />;
		}

		return (
			<div styleName="content contentSidebarRight">
				<Login />
			</div>
		);
	}
}
const mapStateToProps = ({ auth }) => ({
	auth: auth.auth
});

export default withRouter(connect(mapStateToProps)(CSSModules(LoginPage, styles, { allowMultiple: true })));
