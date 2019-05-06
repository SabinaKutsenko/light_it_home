import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { array, number } from "prop-types";

import CSSModules from "react-css-modules";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/
import styles from "../../sass/main.module.scss";


class Product extends Component {
	static propTypes = {
		pk: number,
		productsList: array
	}

	/*	state = ({
		imageIdx: 0,
	});

	changeSlide = () => () => {
		alert('slide');
	}*/

	render() {
		const { productsList, pk } = this.props;
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
						{/*{(images.length > 0) && <button styleName="productImgSlideButton" onClick={this.changeSlide()} >
							<FontAwesomeIcon icon="long-arrow-alt-right" />
						</button>
						}*/}

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

					<div styleName="productPagination">
						<div styleName="tabs mrgnBottomLg">
							<button styleName="btn btnSm btnLight">
								<Link to={`/product/${productsList[prev].pk}`}>
									Next product
								</Link>
							</button>

							<button styleName="btn btnSm btnLight">
								<Link to={`/product/${productsList[next].pk}`}>
									Next product
								</Link>
							</button>
						</div>
						<button styleName="btn btnLg btnLight">
							<Link to={`/`}>
								Back to homepage
							</Link>
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default CSSModules(Product, styles, { allowMultiple: true });
