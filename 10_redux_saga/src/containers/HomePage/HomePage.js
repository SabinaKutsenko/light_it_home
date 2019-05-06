import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { array, func } from "prop-types";

import CSSModules from 'react-css-modules';
import connect from "react-redux/es/connect/connect";
import styles from "../../sass/main.module.scss";

import Home from "../../components/Home/Home";
import { fetchProducts } from "../../saga/products/products.action";

class HomePage extends Component {
	static propTypes = {
		fetchProducts: func,
		productsList: array,
		productsSearchResult: array
	}

	componentDidMount() {
		this.props.fetchProducts();
	}

	renderPost = (product, index) => {
		return (
			<Home product={product} key={index} />
		);
	}

	render() {
		const { productsList, productsSearchResult } = this.props;

		return (
			<div styleName="content">
				<section styleName="productsList">
					{ productsSearchResult.length > 0 ?
						productsSearchResult.map((product, index) => {
							return this.renderPost(product, index);
						})
						:
						productsList.map((product, index) => {
							return this.renderPost(product, index);
						})
					}
				</section>
			</div>
		);
	}
}

const mapStateToProps = ({ products, loader, searchProducts }) => ({
	productsList: products.productsList,
	productsSearchResult: searchProducts.productsSearchResult
});

const mapDispatchToProps = (dispatch) => ({
	fetchProducts: () => dispatch(fetchProducts())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CSSModules(HomePage, styles)));
