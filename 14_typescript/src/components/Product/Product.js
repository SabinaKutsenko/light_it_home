import React, { Fragment } from 'react';
import { array, number } from "prop-types";

import CSSModules from "react-css-modules";
import styles from "../../sass/main.module.scss";

import Pagination from "./Pagination";

function render({ productsList, pk }) {
	const productIndex = productsList.findIndex((x) => (x.pk === pk));
	const next = (productIndex + 1) >= productsList.length ? 0 : (productIndex + 1);
	const prev = (productIndex - 1) > -1 ? (productIndex - 1) : (productsList.length - 1);
	const { theme, images, price, owner, text } = productsList[productIndex];
	const imageSrc = (images.length > 0) ?  images[0].file : '../src/assets/images/default_img.png';
	return (
		<Fragment>
			<div styleName="productImg">
				<div styleName="productImgWrap">
					<img src={imageSrc} alt={theme} />
				</div>
			</div>

			<div styleName="productInfo">
				<h1 styleName="productTitle">{ theme }</h1>
				<h5 styleName="productDetails">from
					<span styleName="productOwner"> { owner.username } </span>
					<span styleName="productPrice"> { price }$ </span>
				</h5>
				<div styleName="productText mrgnBottomLg">
					{ text }
				</div>

				<Pagination next={`/product/${productsList[next].pk}`} prev={`/product/${productsList[prev].pk}`} />
			</div>
		</Fragment>
	);
}

render.propTypes = {
	pk: number,
	productsList: array
};

const Product = ({ productsList, pk }) => (
	render({ pk, productsList })
);

Product.propTypes = {
	pk: number,
	productsList: array
};

export default CSSModules(Product, styles, { allowMultiple: true });
