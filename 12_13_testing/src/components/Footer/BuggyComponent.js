import React, { Component } from 'react';

import CSSModules from "react-css-modules";
import styles from "../../sass/main.module.scss";

const style = {
	display: 'inline-block',
	width: 'auto',
	paddingLeft: 15,
	paddingRight: 15,
	marginLeft: 15,
};

class BuggyComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { triggerError: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ triggerError: true });
	}

	render() {
		if (this.state.triggerError === true) {
			/*throw new Error('I crashed!');*/
			throw 'Some Error';
		}

		return (<button
			style={style} styleName="btn btnLg btnLight" onClick={this.handleClick}
		        > ErrorBoundary Button </button>);
	}
}

export default CSSModules(BuggyComponent, styles, { allowMultiple: true });
