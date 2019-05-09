import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { bool } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

import Register from "../../components/Register/Register";

class RegisterPage extends Component {
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
				<Register />
			</div>
		);
	}
}
const mapStateToProps = ({ auth }) => ({
	auth: auth.auth
});

export default connect(mapStateToProps)(CSSModules(RegisterPage, styles, { allowMultiple: true }));
