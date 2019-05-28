import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { string, any } from "prop-types";

class PrivateRouter extends Component {
	static propTypes = {
		component: any,
		state: any,
		to: string
	};

	render() {
		const { component, state, to, ...rest } = this.props;
		return (
			<Route
				{...rest}
				render={(props) => {
					if (!state) return <Redirect to={to} />;
					return React.createElement(component, props);
				}}
			/>
		);
	}
}

export default PrivateRouter;
