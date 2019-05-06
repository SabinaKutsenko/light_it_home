import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { object } from "prop-types";
import connect from "react-redux/es/connect/connect";

import CSSModules from "react-css-modules";
import styles from "../../sass/main.module.scss";

import Profile from "../../components/Profile/Profile";

class ProfilePage extends Component {
	static propTypes = {
		authInfo: object
	}

	render() {
		const { authInfo } = this.props;
		return (
			<div styleName="content">
				<section styleName="profileInner">
					<Profile userInfo={authInfo} />
				</section>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => ({
	authInfo: auth.authInfo,
});

export default withRouter(connect(mapStateToProps)(CSSModules(ProfilePage, styles, { allowMultiple: true })));
