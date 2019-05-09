/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';

const styles = ({
	height: '100vh',
	width: '100vw',
	boxSizing: 'border-box',
	zIndex: 9999,
	overflow: 'hidden',
	position: 'fixed',
	top: 0,
	left: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'rgba(255, 255, 255, 0.5)'
});

class LoaderContainer extends Component {
	render() {
		return (
			<div className="test" style={styles}>
				<div className="loader"><img src="../src/assets/images/loader.gif" alt={"loader image"} /></div>
			</div>
		);
	}
}

export default LoaderContainer;
