import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { func, bool } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";


const validate = (values) => {
	const errors = {};
	if (!values.theme) {
		errors.theme = 'Required';
	}
	return errors;
};

const warn = (values) => {
	const warnings = {};
	if (!values.theme) {
		warnings.theme = 'Forgot Theme...';
	}
	return warnings;
};

class AddProductForm extends Component {
	static propTypes = {
		handleSubmit: func,
		pristine: bool,
		submitting: bool
	};

	render() {
		const { handleSubmit, pristine, submitting } = this.props;
		return (
			<form styleName="form" onSubmit={handleSubmit}>

				<Field lable="Theme" styleName="formInput" name="theme" component={renderField} placeholder="Theme" type="text" />
				<Field lable="Text" styleName="formInput" name="text" component={renderField} placeholder="Text" type="textarea" />
				<Field lable="Price" styleName="formInput" name="price" component={renderField} placeholder="Price" type="number" />
				<Field lable="Currency" styleName="formInput" name="currency" component={selectField} placeholder="Currency" type="dropdown">
					<option name='dollar'>Dollar</option>
					<option name='euro'>Euro</option>
				</Field>
				<Field lable="Contract Price" styleName="formInput" name="contract_price" component={renderField} placeholder="Contact Price" type="checkbox" />
				<Field lable="Location" styleName="formInput" name="location" component={renderField} placeholder="Location" type="text" />
				<Field lable="Is Active" styleName="formInput" name="is_active" component={renderField} placeholder="Is Active" type="checkbox" />
				
				<button styleName="btn btnLg mrgnTopLg" type="submit" disabled={pristine || submitting} > Create New Post </button>
			</form>
		);
	}
}

// Create custom Field for redux-form
const renderField = ({ className, placeholder, input, lable, type, meta: { touched, error, warning } }) => (
	<div className={className}>
		<input  {...input} placeholder={placeholder} type={type} /> {(type == 'checkbox') && <span>{lable}</span>}
		{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	</div>
);

const selectField = ({ className, input, children }) => (
  <select className={className} {...input}>
	{children}
  </select>
);

export default reduxForm({
	form: 'AddProductForm',  // a unique identifier for this form
	validate,          // <--- validation function given to redux-form
	warn               // <--- warning function given to redux-form
})(CSSModules(AddProductForm, styles, { allowMultiple: true }));
