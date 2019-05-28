import React, { Component } from 'react';
import { Link } from "react-router-dom";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

class SearchBar extends Component {
	state = {
		searchQuery: '',
	};

	handleSearch = (e: React.ChangeEvent<any>) => {
		const searchQuery = e.target.value;
		this.setState(() => ({ searchQuery }));
	}

	render() {
		const { searchQuery } = this.state;

		return (
			<div styleName="headerSearch">
				<div styleName="search">
					<Link to={`/search_result?filter=${searchQuery}`} ><i className="fa fa-search" /></Link>
					<input styleName="searchInput" value={searchQuery} onChange={this.handleSearch} type="text" placeholder="Try to find something" />
				</div>
			</div>
		);
	}
}

export default CSSModules(SearchBar, styles, { allowMultiple: true });
