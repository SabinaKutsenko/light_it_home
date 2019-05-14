import React, { Component } from 'react';
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { func, bool, object } from "prop-types";

import CSSModules from 'react-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../../sass/main.module.scss";

import { fetchAuthOut } from "../../saga/auth/auth.action";

class HeaderProfileBlock extends Component {
	static propTypes = {
		auth: bool,
		authInfo: object,
		fetchAuthOut: func,
	}

	logOutUser = () => {
		this.props.fetchAuthOut();
	}

	render() {
		const { auth, authInfo } = this.props;
		const { username, avatar } = authInfo;
		const auth_var = (auth) ? styles.headerUserProfileAuthorized : styles.headerUserProfileNotAuthorized;

		return (
			<div styleName="headerUserProfile" className={auth_var}>

				<div styleName="userInfo">

					<div styleName="userInfoList">
						<div styleName="userInfoAvatar">
							<img src={avatar ? avatar : '../src/assets/images/default_img.png'} alt="avatar" />
						</div>
						<div styleName="userInfoName">{username}</div>
						<button onClick={this.logOutUser} styleName="userInfoMenuButton tooltip">
							<FontAwesomeIcon icon="sign-out-alt" />
							<span styleName="tooltiptext">Logout</span>
						</button>
					</div>

					<div styleName="userInfoUserMenu">
						<Link to={`/add_product`} >Add new post</Link>
						<Link to={`/profile`} >Profile</Link>
					</div>

				</div>

				<div styleName="headerLogin">
						Welcome, <Link to={`/login`} >login</Link>or <Link to={`/register`} >register</Link> for start!
				</div>

			</div>

		);
	}
}

const mapStateToProps = ({ auth }) => ({
	authInfo: auth.authInfo,
	auth: auth.auth
});
const mapDispatchToProps = (dispatch) => ({
	fetchAuthOut: () => dispatch(fetchAuthOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(HeaderProfileBlock, styles, { allowMultiple: true }));
