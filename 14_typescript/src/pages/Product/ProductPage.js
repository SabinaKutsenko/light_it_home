import React, { Component } from 'react';
import { object, array } from "prop-types";
import connect from "react-redux/es/connect/connect";

import CSSModules from "react-css-modules";

import styles from "../../sass/main.module.scss";

import Product from "../../components/Product/Product";

class ProductPage extends Component {
	static propTypes = {
		match: object,
		productsList: array
	}

	renderItem = (productsList, pk) => {
		return (
			<Product pk={pk} productsList={productsList} />
		);
	}

	render() {
		const { productsList } = this.props;
		const pk = +this.props.match.params.id;

		return (
			<div styleName="content">
				<section styleName="productInner">

					{ productsList.length === 0 ?
						<div> Loader... </div>
						:
						this.renderItem(productsList, pk)
					}

				</section>
			</div>
		);
	}
}
const mapStateToProps = ({ products }) => ({
	productsList: products.productsList
});


export default connect(mapStateToProps)(CSSModules(ProductPage, styles));
