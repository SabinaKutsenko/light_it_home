import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { func, string } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

class SearchBar extends Component {
	static propTypes = {
		handleSearch: func,
		searchRequestSend: func,
		word: string
	}

	render() {
		const { searchRequestSend, handleSearch, word } = this.props;

		return (
			<div styleName="headerSearch">
				<div styleName="search" action="#">
					<Link to={`/search_result?filter=${word}`} onClick={searchRequestSend}><i className="fa fa-search" /></Link>
					{/*<button type="submit" onClick={searchRequestSend}><i className="fa fa-search" /></button>*/}
					<input styleName="searchInput" value={word} onChange={handleSearch} type="text" placeholder="Try to find something" />
				</div>
			</div>
		);
	}
}

export default CSSModules(SearchBar, styles, { allowMultiple: true });
