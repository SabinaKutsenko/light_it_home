import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { array, func, object } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

import { fetchProductsSearch } from "../../saga/search_products/search_products.action";

import SearchBar from "./SearchBar";
import HeaderProfileBlock from './HeaderProfileBlock';

class Header extends Component {
	static propTypes = {
		fetchProductsSearch: func,
		history: object,
		productsList: array,
	}

	state = {
		searchQuery: '',
	};

	handleSearch = (e) => {
		const { productsList } = this.props;
		const searchQuery = e.target.value;
		this.setState(() => ({ searchQuery }));

		const page = window.location.pathname;
		(page != "/") && this.props.history.push("/");

		this.props.fetchProductsSearch(searchQuery, productsList);
	}

	render() {
		const { searchQuery } = this.state;

		return (
			<header styleName="header">

				<div styleName="headerLeft">
					<Link styleName="headerLogoBlock" to={`/`} >
						<img styleName="logo logoSizeM" src="../src/assets/images/logo_blue.png" alt="Logo" />
					</Link>
					<SearchBar word={searchQuery} searchRequestSend={this.searchRequestSend} handleSearch={this.handleSearch} />
				</div>
				<HeaderProfileBlock />

			</header>
		);
	}
}

const mapStateToProps = ({ products }) => ({
	productsList: products.productsList,
});

const mapDispatchToProps = (dispatch) => ({
	fetchProductsSearch: (searchQuery, productsList) => dispatch(fetchProductsSearch(searchQuery, productsList))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CSSModules(Header, styles, { allowMultiple: true })));
