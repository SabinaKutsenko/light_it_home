import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { object, array } from "prop-types";

import CSSModules from "react-css-modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../sass/main.module.scss";
/*import styles from './Product.module.scss';*/

class Product extends Component {
	static propTypes = {
		match: object,
		post: object,
		posts: array
	}

	/*state = ({
		imageSrc: ''
	});*/


	/*changeSlide = () => () => {
		alert('slide');
	}*/


	renderItem = () => {
		const { post, posts } = this.props;
		const postID = +this.props.match.params.id;
		const next = (postID + 1) >= posts.length ? 0 : (postID + 1);
		const prev = (postID - 1) > -1 ? (postID - 1) : (posts.length - 1);
		const { theme, images, price, owner, text } = post;
		const imageSrc = (images.length > 0) ?  images[0].file : '../src/assets/images/default_img.png';

		return (
			<>
				<div styleName="productImg">
					<div styleName="productImgWrap">
						<img src={imageSrc} alt={theme} />
						{/*<button styleName="productImgSlideButton" onClick={this.changeSlide()} >
							<FontAwesomeIcon icon="long-arrow-alt-right" />
						</button>*/}
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
								<Link to={`/homepage/${prev}`}>
									Next product
								</Link>
							</button>

							<button styleName="btn btnSm btnLight">
								<Link to={`/homepage/${next}`}>
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
			</>
		);
	}

	render() {
		const { posts } = this.props;
		return (
			<div styleName="content">
				<section styleName="productInner">

					{ posts.length === 0 ?
						<div> Loader </div>
						:
						this.renderItem()
					}

				</section>
			</div>
		);
	}
}

export default CSSModules(Product, styles, { allowMultiple: true });
