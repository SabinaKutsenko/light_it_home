import React, { Component } from 'react';
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { func } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

import { fetchProductsSearch } from "../../saga/search_products/search_products.action";

import SearchBar from "./SearchBar";
import HeaderProfileBlock from './HeaderProfileBlock';

class Header extends Component {
	static propTypes = {
		fetchProductsSearch: func
	}

	state = {
		searchQuery: '',
	};

	handleSearch = (e) => {
		const searchQuery = e.target.value;
		this.setState(() => ({ searchQuery }));
	}

	/*searchRequestSend = (e) => {
		const { searchQuery } = this.state;
		this.props.fetchProductsSearch(searchQuery);
	}*/

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

const mapDispatchToProps = (dispatch) => ({
	fetchProductsSearch: (searchQuery) => dispatch(fetchProductsSearch(searchQuery))
});

export default connect(null, mapDispatchToProps)(CSSModules(Header, styles, { allowMultiple: true }));
