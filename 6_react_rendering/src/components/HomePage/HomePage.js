import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { array } from "prop-types";
import "../../sass/main.scss";


class HomePage extends Component {
	static propTypes = {
		posts: array,
	}

	renderPost = (post) => {
		const { id, title, img } = post;

		return (
			<div key={id} className="product">
				<img className="product__img" src={ img } alt="product"/>
				<Link to={`/homepage/${id}`} info={"dd"} className="product__info">
					<div className="product__title">{ title }</div>
					<i className="fa fa-eye"></i>
				</Link>
			</div>
		);
	}

	render() {
		const { posts } = this.props;

		return (
			<div className="content">
				<section className="products-list">
					{
						posts.map((post) => {
							return this.renderPost(post);
						})
					}
				</section>
			</div>
		);
	}
}

export default HomePage;
