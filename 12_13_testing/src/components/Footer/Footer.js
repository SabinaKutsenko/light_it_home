import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

import { ThemeContext } from '../../theme-context';

import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

class Footer extends Component {
	render() {
		const theme = this.context;
		return (
			<footer style={{ backgroundColor: theme.background }} styleName="footer">
				<div styleName="footerColumn">
					<div>
						{theme.footerText}
						<ErrorBoundary>
							<BuggyComponent />
						</ErrorBoundary>
					</div>
				</div>
			</footer>
		);
	}
}

Footer.contextType = ThemeContext;

export default CSSModules(Footer, styles);
