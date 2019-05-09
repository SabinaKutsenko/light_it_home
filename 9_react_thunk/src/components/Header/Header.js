import React, { Component } from 'react';
import { Link } from "react-router-dom";

import CSSModules from 'react-css-modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*import { faEnvelope, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";*/
import styles from "../../sass/main.module.scss";

//locall variables
const logoSrc = "../src/assets/images/logo_blue.png";
const avatarSrc = "../src/assets/images/avatar.png";

class Header extends Component {
	render() {
		const auth = window.location.pathname;
		const auth_var = (auth == "/login") ? styles.headerUserProfileNotAuthorized : styles.headerUserProfileAuthorized;

		return (
			<header styleName="header">

				<div styleName="headerLeft">

					<Link styleName="headerLogoBlock" to={`/`} >
						<img styleName="logo logoSizeM" src={logoSrc} alt="Logo" />
					</Link>

					<div styleName="headerSearch">
						<form styleName="search" action="#">
							<button type="submit"><i className="fa fa-search" /></button>
							<input styleName="searchInput" type="text" placeholder="Try to find something" />
						</form>
					</div>
				</div>

				<div styleName="headerUserProfile" className={auth_var}>

					<div styleName="userInfo">

						<div styleName="userInfoList">
							<div styleName="userInfoAvatar">
								<img src={avatarSrc} alt="avatar" />
							</div>
							<div styleName="userInfoName">Kim Evans</div>
							<Link to={"/login"} styleName="userInfoMenuButton">
								<FontAwesomeIcon icon="sign-out-alt" />
							</Link>
						</div>

						<div styleName="userInfoUserMenu">
							<a href="#">Add new post</a>
							<a href="#">Profile</a>
						</div>

					</div>

					<div styleName="headerLogin">
						Welcome, <Link to={`/login`} >login</Link>or <Link to={`/login`} >register</Link> for start!
					</div>

				</div>

			</header>
		);
	}
}

export default CSSModules(Header, styles, { allowMultiple: true });
