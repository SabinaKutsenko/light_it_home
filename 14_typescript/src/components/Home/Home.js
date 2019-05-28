import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { object } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

class Home extends Component {
	static propTypes = {
		product: object
	};

	render() {
		const { product } = this.props;
		const { pk, theme, images } = product;
		const imageSrc = (images.length > 0) ?  images[0].file : '../src/assets/images/default_img.png';

		return (
			<div  styleName="product">
				<div styleName="productImg">
					<img src={imageSrc} alt="product" />
				</div>

				<Link to={`/product/${pk}`} info={theme} styleName="productInfo">
					<div styleName="productTitle">{ theme }</div>
					<i className="fa fa-eye" />
				</Link>
			</div>
		);
	}
}

export default CSSModules(Home, styles);
