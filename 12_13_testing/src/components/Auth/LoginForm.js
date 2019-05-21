import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

import { func, bool } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

import FormWrapper from "./form_hoc";

const validate = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	return errors;
};

const warn = (values) => {
	const warnings = {};
	if (!values.password) {
		warnings.password = 'Forgot Password...';
	}
	return warnings;
};

class LoginForm extends Component {
	static propTypes = {
		handleSubmit: func,
		pristine: bool,
		submitting: bool
	};

	render() {
		const { handleSubmit, pristine, submitting } = this.props;
		return (
			<form styleName="form" onSubmit={handleSubmit}>
				<Field lable="Email" styleName="formInput" name="email" component={renderField} placeholder="Email" type="email" />
				<Field styleName="formInput" name="password"component={renderField} placeholder="Password" type="password" />
				<button styleName="btn btnLg mrgnTopLg" type="submit" disabled={pristine || submitting} > Login </button>
			</form>
		);
	}
}

// Create custom Field for redux-form
const renderField = ({ className, placeholder, input, label, type, meta: { touched, error, warning } }) => (
	<div className={className}>
		<input  {...input} placeholder={placeholder} type={type} />
		{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	</div>
);

export default FormWrapper( reduxForm({
	form: 'LoginForm',  // a unique identifier for this form
	validate,          // <--- validation function given to redux-form
	warn               // <--- warning function given to redux-form
})(CSSModules(LoginForm, styles, { allowMultiple: true })));
