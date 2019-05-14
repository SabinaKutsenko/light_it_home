import React, { Component } from 'react';
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
					{ productsList.length > 0 ?
						productsList.map((product, index) => {
							return this.renderPost(product, index);
						})
						:
						"Products not found"
					}
				</section>
			</div>
		);
	}
}

const mapStateToProps = ({ products }) => ({
	productsList: products.productsList
});

const mapDispatchToProps = (dispatch) => ({
	fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(HomePage, styles));
