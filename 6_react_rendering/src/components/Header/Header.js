import React, { Component } from 'react';
import { number } from "prop-types";

import "../../sass/main.scss";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
	static propTypes = {
		auth: number,
	}
	
	render() {
		const auth = window.location.pathname;
		const auth_var = ( auth == "/login" ) ? "profile_not-authorized" : "profile_authorized";
		
		return (
			<header className="header">
				
				<div className="header__left">

					<Link className="header__logo-block" to={`/`} >
						<img className="logo logo__size_m" src="../src/images/logo_blue.png" alt="Logo"/>
					</Link>
					
					<div className="header__search">
						<form className="search" action="#">
							<button type="submit"><i className="fa fa-search"></i></button>
							<input className="search__input" type="text" placeholder="Try to find something"/>
						</form>
					</div>
				</div>
				
				<div
					className={`header__user-profile header__user-${auth_var}`}>
					
					<div className="user-info">
						
						<div className="user-info__list">
							<div className="user-info__avatar">
								<img src="../src/images/avatar.png" alt="avatar"/>
							</div>
							<div className="user-info__name">Kim Evans</div>
							<Link to={"./login"} className="user-info__user-menu-button"><FontAwesomeIcon icon="sign-out-alt"></FontAwesomeIcon></Link>
						</div>
						
						<div className="user-info__user-menu">
							<a href="#">Add new post</a>
							<a href="#">Profile</a>
						</div>
					
					</div>
					
					<div className="header__login">
						Welcome, <Link to={`/login`} >login</Link>or <Link to={`/login`} >register</Link> for start!
					</div>
				
				</div>
			
			</header>
		);
	}
}

export default Header;
