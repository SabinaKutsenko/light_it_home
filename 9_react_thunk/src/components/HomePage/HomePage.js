import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { array } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

class HomePage extends Component {
	static propTypes = {
		posts: array,
	}

	renderPost = (post, indx) => {
		const id = indx;
		const { /*pk,*/ theme, images } = post;
		const imageSrc = (images.length > 0) ?  images[0].file : '../src/assets/images/default_img.png';

		return (
			<div key={id} styleName="product">
				<div styleName="productImg">
					<img src={imageSrc} alt="product" />
				</div>

				<Link to={`/homepage/${id}`} info={theme} styleName="productInfo">
					<div styleName="productTitle">{ theme }</div>
					<i className="fa fa-eye" />
				</Link>
			</div>
		);
	}

	render() {
		const { posts } = this.props;
		return (
			<div styleName="content">
				<section styleName="productsList">
					{
						posts.map((post, indx) => {
							return this.renderPost(post, indx);
						})
					}
				</section>
			</div>
		);
	}
}

export default CSSModules(HomePage, styles);
