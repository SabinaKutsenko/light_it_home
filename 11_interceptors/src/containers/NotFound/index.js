import React, { Component } from 'react';
import styles from "../../sass/main.module.scss";
import CSSModules from 'react-css-modules';

class NotFound extends Component {

	render() {
		const { productsList, productsSearchResult } = this.props;

		return (
			<div styleName="content">
				<h1>Not Found Page</h1>
			</div>
		);
	}
}

export default CSSModules(NotFound, styles);
