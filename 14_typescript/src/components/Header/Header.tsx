import React, { Component } from 'react';
import { Link } from "react-router-dom";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

import SearchBar from "./SearchBar";
import ProfileBlock from './ProfileBlock';

class Header extends Component {
	render() {
		return (
			<header styleName="header">

				<div styleName="headerLeft">
					<Link styleName="headerLogoBlock" to={`/`} >
						<img styleName="logo logoSizeM" src="../src/assets/images/logo_blue.png" alt="Logo" />
					</Link>
					<SearchBar />
				</div>
				<ProfileBlock />

			</header>
		);
	}
}

export default CSSModules(Header, styles, { allowMultiple: true });
