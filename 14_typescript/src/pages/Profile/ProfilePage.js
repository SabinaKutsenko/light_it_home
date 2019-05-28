import React, { Component } from 'react';
import { object, array, func } from "prop-types";
import connect from "react-redux/es/connect/connect";

import CSSModules from "react-css-modules";
import styles from "../../sass/main.module.scss";

import Profile from "../../components/Profile/Profile";
import ProductOwn from "../../components/ProductOwn/ProductOwn";

import { fetchOwnProduct } from "../../saga/own_product/own_product.action";

class ProfilePage extends Component {
	static propTypes = {
		authInfo: object,
		fetchOwnProduct: func,
		productOwnList: array
	}

	componentDidMount() {
		const { fetchOwnProduct } = this.props;
		fetchOwnProduct();
	}

	componentDidUpdate() {
		/*	const { fetchOwnProduct } = this.props;
		fetchOwnProduct();*/
	}

	renderPost = (product) => {
		return (
			<ProductOwn product={product} key={product.pk} />
		);
	}

	render() {
		const { authInfo, productOwnList } = this.props;
		return (
			<div styleName="content profilePage">
				<section styleName="profileInner">
					<Profile styleName="profile" userInfo={authInfo} />
				</section>
				<div styleName="productOwnList">
					{ productOwnList.length > 0 &&
						productOwnList.map((product) => {
							return this.renderPost(product);
						})
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ auth, own_product }) => ({
	authInfo: auth.authInfo,
	productOwnList: own_product.productOwnList
});

const mapDispatchToProps = (dispatch) => ({
	fetchOwnProduct: () => dispatch(fetchOwnProduct())

});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(ProfilePage, styles, { allowMultiple: true }));
