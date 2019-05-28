import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
/*import { func, bool, object } from "prop-types";*/
/*import { Dispatch } from 'redux';*/

import CSSModules from 'react-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../../sass/main.module.scss";
// @ts-ignore
import { fetchAuthOut } from "../../saga/auth/auth.action";

interface StoreStates {
	auth: boolean,
	authInfo: AuthInfo
}

interface fetchAuthOutDispatch {
	fetchAuthOut: () => void,
}

interface AuthInfo {
	avatar: string;
	username: string;
}

class ProfileBlock extends Component<StoreStates & fetchAuthOutDispatch> {
/*	static propTypes = {
		auth: bool,
		authInfo: object,
		fetchAuthOut: func,
	}*/

	logOutUser = () => {
		this.props.fetchAuthOut();
	}

	render() {
		const { auth, authInfo } = this.props;
		if (authInfo && auth) {
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
							<Link to={`/add_product`}>Add new post</Link>
							<Link to={`/profile`}>Profile</Link>
						</div>

					</div>

					<div styleName="headerLogin">
						Welcome, <Link to={`/login`}>login</Link>or <Link to={`/register`}>register</Link> for start!
					</div>

				</div>
			);
		}
		return null;
	}
}

const mapStateToProps = ({ auth }: any): StoreStates => ({
	authInfo: auth.authInfo,
	auth: auth.auth
});
const mapDispatchToProps = (dispatch: any) => ({
	fetchAuthOut: () => dispatch(fetchAuthOut()),
});

export default connect<StoreStates, fetchAuthOutDispatch, any>(mapStateToProps, mapDispatchToProps)(CSSModules(ProfileBlock, styles, { allowMultiple: true }));
