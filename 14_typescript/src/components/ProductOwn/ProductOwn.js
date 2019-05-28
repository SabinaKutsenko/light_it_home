import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { object, func } from "prop-types";
import connect from "react-redux/es/connect/connect";

import CSSModules from "react-css-modules";
import styles from "../../sass/main.module.scss";

import { fetchDeleteProduct } from "../../saga/delete_product/delete_product.action";

class ProductOwn extends Component {
	static propTypes = {
		fetchDeleteProduct: func,
		product: object
	}

	deleteOwnproduct = (id) => () => {
		const { fetchDeleteProduct } = this.props;
		fetchDeleteProduct(id);
	}

	render() {
		const { product } = this.props;
		const { pk, theme, images } = product;
		const imageSrc = (images.length > 0) ?  images[0].file : '../src/assets/images/default_img.png';

		return (
			<div styleName="product" key={product.pk}>

				<button onClick={this.deleteOwnproduct(product.pk)}>X</button>
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

const mapDispatchToProps = (dispatch) => ({
	fetchDeleteProduct: (id) => dispatch(fetchDeleteProduct(id))
});

export default connect(null, mapDispatchToProps)(CSSModules(ProductOwn, styles, { allowMultiple: true }));
