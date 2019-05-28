import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { object } from "prop-types";

import CSSModules from "react-css-modules";
import styles from "../../sass/main.module.scss";

class Profile extends Component {
	static propTypes = {
		userInfo: object,
	}

	render() {
		const { userInfo } = this.props;
		const { id, username, firstName, lastName, email, avatar } = userInfo;

		return (
			<Fragment>
				<div styleName="profileImg">
					<div styleName="profileImgWrap">
						<img src={avatar ? avatar : '../src/assets/images/default_img.png'} alt="Avatar" />
					</div>
				</div>
				<div styleName="profileInfo">
					<h1 styleName="profileTitle">Profile ID: {id}</h1>
					<h5 styleName="profileDetails">
						<span>username: {username}</span>
						<span>firstName: {firstName}</span>
						<span>lastName: {lastName}</span>
					</h5>
					<div styleName="profileText mrgnBottomLg">
						<div>email: {email}</div>
					</div>

					<div styleName="profilePagination">
						<button styleName="btn btnLg btnLight">
							<Link to={`/`}>
								Back to homepage
							</Link>
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}


export default CSSModules(Profile, styles, { allowMultiple: true });
