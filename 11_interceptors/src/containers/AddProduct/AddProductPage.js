import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";
import AddProduct from "../../components/AddProduct/AddProduct";

class AddProductPage extends Component {
	render() {

		return (
			<div styleName="content">
				<AddProduct />
			</div>
		);
	}
}

export default CSSModules(AddProductPage, styles);
