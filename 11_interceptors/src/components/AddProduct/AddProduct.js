import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CSSModules from 'react-css-modules';
import { func, object } from "prop-types";
import styles from "../../sass/main.module.scss";

import { fetchAddProduct } from "../../saga/add_product/add_product.action";
import AddProductForm from './AddProductForm';


//Create form component
class Form extends Component {
	static propTypes = {
		fetchAddProduct: func
	}

	submit = (values) => {
		const { fetchAddProduct } = this.props;
		fetchAddProduct(values);
	}

	render() {
		return (
			<AddProductForm onSubmit={this.submit} />
		);
	}
}


class AddProduct extends Component {
	static propTypes = {
		error: object,
		fetchAddProduct: func,
	}

	renderError = (error) => {
		for(let item in error) {	
			return (<div>{error[item]}</div>);
		}
	}

	render() {
		const { error } = this.props;

		return (
			<div styleName="addProduct">
				<Form fetchAddProduct={this.props.fetchAddProduct} />
				{(error !== {}) && <div className="error">{ this.renderError(error) }</div> }
			</div>
		);
	}
}

const mapStateToProps = ({ add_product }) => ({
	error: add_product.error
});

const mapDispatchToProps = (dispatch) => ({
	fetchAddProduct: (data) => dispatch(fetchAddProduct(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(AddProduct, styles ));
