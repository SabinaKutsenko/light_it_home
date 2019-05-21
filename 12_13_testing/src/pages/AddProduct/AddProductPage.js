import React from 'react';
import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";
import AddProduct from "../../components/AddProduct/AddProduct";

const AddProductPage = function () {
	return (
		<div styleName="content">
			<AddProduct />
		</div>
	);
};

export default CSSModules(AddProductPage, styles);
