import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { func, bool } from "prop-types";

import CSSModules from 'react-css-modules';
import styles from "../../sass/main.module.scss";

import FormWrapper from "./form_hoc";

const validate = (values) => {
	const errors = {};
	if (!values.username) {
		errors.username = 'Required';
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	return errors;
};

class RegisterForm extends Component {
	static propTypes = {
		handleSubmit: func,
		pristine: bool,
		submitting: bool
	};

	render() {
		const { handleSubmit, pristine, submitting } = this.props;

		return (
			<form styleName="form" onSubmit={handleSubmit}>
				<Field lable="Username" styleName="formInput" name="username" component={renderField} placeholder="Username" type="text" />
				<Field lable="Email" styleName="formInput" name="email" component={renderField} placeholder="Email" type="email" />
				<Field styleName="formInput" name="password"component={renderField} placeholder="Password" type="password" />
				<Field styleName="formInput" name="password2"component={renderField} placeholder="Confirm Password" type="password" />
				<button styleName="btn btnLg mrgnTopLg" type="submit" disabled={pristine || submitting} > Register </button>
			</form>
		);
	}
}

const renderField = ({ className, placeholder, input, label, type, meta: { touched, error, warning } }) => (
	<div className={className}>
		<input  {...input} placeholder={placeholder} type={type} />
		{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	</div>
);

export default FormWrapper(reduxForm({
	form: 'RegisterForm',  // a unique identifier for this form
	validate          // <--- validation function given to redux-form
})(CSSModules(RegisterForm, styles, { allowMultiple: true })), 'registerForm');
