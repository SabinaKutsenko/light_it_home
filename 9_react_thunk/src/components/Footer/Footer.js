import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

class Footer extends Component {
	render() {
		return (
			<footer styleName="footer">
				<div styleName="footerColumn">
					<span>2019 - front-end labs Light IT</span>
				</div>
			</footer>
		);
	}
}

export default CSSModules(Footer, styles);
