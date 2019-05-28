import React, { Component } from 'react';
import { object } from "prop-types";

class ErrorBoundary extends Component {
	static propTypes = {
		children: object,
	}
	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		console.log(error);
		return { hasError: true };
	}

	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			info: null
		};
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div>
					<h1>Oops, something went wrong :(</h1>
				</div>
			);
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
