import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { array } from "prop-types";


class LoginPage extends Component {
	static propTypes = {
	}
	

	render() {
		const { posts } = this.props;

		return (
			<div className="content content_sidebar_right">
				
				<section className="content__main">
					<div className="login-page-img"></div>
				</section>
				
				<section className="content__sidebar">
					<img className="logo logo__size_l" src="../src/images/logo_white.png" alt="Logo"/>
					<div className="authoriz-block">
						
						<div className="tabs mrgn-bottom-lg">
							<button className="btn btn_sm">Sing In</button>
							<button className="btn btn_sm">Sing Up</button>
						</div>
						<form className="form" action="#">
							<input className="form__input" type="email" placeholder="Email" name="email"/>
								<input className="form__input" type="text" placeholder="Password" name="password"/>
									<Link to={`/`} className="btn btn_lg mrgn-top-lg">Login</Link>
						</form>
					
					</div>
				</section>
			</div>
		);
	}
}

export default LoginPage;
