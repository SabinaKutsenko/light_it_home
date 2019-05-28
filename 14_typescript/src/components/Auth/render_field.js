import React from 'react';

// Create custom Field for redux-form
export const renderField = ({ className, placeholder, input, label, type, meta: { touched, error } }) => (
	<div className={className}>
		<input  {...input} placeholder={placeholder} type={type} />
		{touched && ((error && <span>{error}</span>))}
	</div>
);
