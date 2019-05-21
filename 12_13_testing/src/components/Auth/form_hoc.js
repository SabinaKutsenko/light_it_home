import React, { Component } from 'react';
import { func } from "prop-types";

const FormWrapper = (WrappedComponent) => {
	class Wrapp extends Component {
		static propTypes = {
			function: func
		};

        submit = (values) => this.props.function(values);

        render() { return <WrappedComponent {...this.props} onSubmit={this.submit} /> ; }
	}
	return Wrapp;
};

export default FormWrapper;
