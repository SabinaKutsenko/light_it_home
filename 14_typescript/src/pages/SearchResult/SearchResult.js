import React, { Component } from 'react';
import { func, array, object } from "prop-types";
import connect from "react-redux/es/connect/connect";
import CSSModules from 'react-css-modules';

import queryString from 'query-string';
import styles from "../../sass/main.module.scss";
import Home from "../../components/Home/Home";
import { fetchProductsSearch } from "../../saga/search_products/search_products.action";

class SearchResult extends Component {
	static propTypes = {
		fetchProductsSearch: func,
		location: object,
		productsSearchResult: array
	}

	componentDidMount() {
		const values = queryString.parse(this.props.location.search);
		(values.filter) && this.props.fetchProductsSearch(values.filter);
	}

	componentDidUpdate() {
		const values = queryString.parse(this.props.location.search);
		(values.filter) && this.props.fetchProductsSearch(values.filter);
	}

	renderPost = (product, index) => {
		return (
			<Home product={product} key={index} />
		);
	}

	render() {
		const { productsSearchResult } = this.props;

		return (
			<div styleName="content">
				<section styleName="productsList">
					{ productsSearchResult.length > 0 ?
						productsSearchResult.map((product, index) => {
							return this.renderPost(product, index);
						})
						:
						"Result not found"
					}
				</section>
			</div>
		);
	}
}
const mapStateToProps = ({ searchProducts }) => ({
	productsSearchResult: searchProducts.productsSearchResult
});

const mapDispatchToProps = (dispatch) => ({
	fetchProductsSearch: (searchQuery, productsList) => dispatch(fetchProductsSearch(searchQuery, productsList))
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(SearchResult, styles));

