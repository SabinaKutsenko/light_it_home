import React, { Component } from 'react';
import { array } from "prop-types";

import "../../sass/main.scss";

class Footer extends Component {
	
	render() {
		
		return (
			<footer className="footer">
				<div className="footer__column">
					<span className="copyright">2019 - front-end labs Light IT</span>
				</div>
			</footer>
		);
	}
}

export default Footer;
