import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

import { array, func, bool } from "prop-types";

import styles from "../../sass/main.module.scss";
import CSSModules from 'react-css-modules';

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (!values.firstName) {
    warnings.firstName = 'Hmm, you seem a bit young...'
  }
  return warnings
}


class FormComp extends Component {

	static propTypes = {
		handleSubmit: func,
		submitting: bool,
		pristine: bool,
		reset: func,
	};

	render() {

		const { handleSubmit, pristine, reset, submitting } = this.props;
		console.log(this.props);
		return (
		    <form styleName="form" onSubmit={handleSubmit}>
				<Field lable="Email" styleName="formInput" name="email" component={renderField} placeholder="Email" type="email" />
				<Field styleName="formInput" name="password"component={renderField} placeholder="Password" type="password" />
				<button styleName="btn btnLg mrgnTopLg" type="submit" disabled={pristine || submitting} > Login </button>
				{/*<button styleName="btn btnLg mrgnTopLg" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>*/}

			</form>
		)
	}
}


const renderField = ({ className, placeholder, input, label, type, meta: { touched, error, warning } }) => (

    <div className={className}>
      <input  {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)

export default reduxForm({
	form: 'FormComp',  // a unique identifier for this form
	validate,          // <--- validation function given to redux-form
	warn               // <--- warning function given to redux-form
	/*fields: [],*/
})(CSSModules(FormComp, styles, { allowMultiple: true }));