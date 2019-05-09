import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

import FormComp from './FormComp'

class Contain extends Component {
   submit = values => {
     console.log (values)
   }

   render () {
     return <FormComp onSubmit = {this.submit} />
   }
}


class LoginPage extends Component {
	render() {
		return (
			<div styleName="content contentSidebarRight">

				<section styleName="contentMain">
					<div styleName="loginPageImg" />
				</section>

				<section styleName="contentSidebar">
					<img styleName="logo logoSizeL" src="../src/assets/images/logo_white.png" alt="Logo" />
					<div styleName="authorizBlock">

						<div styleName="tabs mrgnBottomLg">
							<button styleName="btn btnSm">Sing In</button>
							<button styleName="btn btnSm">Sing Up</button>
						</div>
						<Contain />


					{/*	<form styleName="form" onSubmit={props.handleSubmit}>
				         	<input styleName="formInput" type="email" placeholder="Email" name="email" />
							<input styleName="formInput" type="text" placeholder="Password" name="password" />
							<Link to={`/`} styleName="btn btnLg mrgnTopLg">Login</Link>
				         </form>*/}

					</div>
				</section>
			</div>
		);
	}
}

export default CSSModules(LoginPage, styles, { allowMultiple: true });