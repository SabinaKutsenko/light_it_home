import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { string } from "prop-types";

import CSSModules from "react-css-modules";
import styles from "../../sass/main.module.scss";

function render({ next, prev }) {
	return (
		<div styleName="productPagination">
			<div styleName="tabs mrgnBottomLg">
				<button styleName="btn btnSm btnLight">
					<Link to={prev}>
						Next product
					</Link>
				</button>

				<button styleName="btn btnSm btnLight">
					<Link to={next}>
						Next product
					</Link>
				</button>
			</div>
			<button styleName="btn btnLg btnLight">
				<Link to={`/`}>
					Back to homepage
				</Link>
			</button>
		</div>
	);
}

render.propTypes = {
	next: string,
	prev: string
};

const Pagination = ({ next, prev }) => (
	<Fragment>{render({ next, prev })}</Fragment>
);

Pagination.propTypes = {
	next: string,
	prev: string,
};

Pagination.defaultProps = {
	next: "/",
	prev: "/"
};

export default CSSModules(Pagination, styles, { allowMultiple: true });
