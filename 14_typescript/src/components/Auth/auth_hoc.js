import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";
// This function takes a component...
//Create form component


const AuthPageWrapper = (WrappedComponent) => {
	class Wrapp extends Component {
		render() {
			return (
				<Fragment>
					<section styleName="contentMain">
						<div styleName="loginPageImg" />
					</section>

					<section styleName="contentSidebar">
						<img styleName="logo logoSizeL" src="./src/assets/images/logo_white.png" alt="Logo" />
						<div styleName="authorizBlock">

							<div styleName="tabs mrgnBottomLg">
								<Link to={`/login`} styleName="btn btnSm">Sign In</Link>
								<Link to={`/register`} styleName="btn btnSm">Sign Up</Link>
							</div>
							<div> email: sabina.kutsenko@gmail.com </div>
							<div> pass: qwe123qwe</div>
							<WrappedComponent {...this.props} />
						</div>
					</section>
				</Fragment>
			);
		}
	}
	return CSSModules(Wrapp, styles, { allowMultiple: true });
};

export default AuthPageWrapper;
