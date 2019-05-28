import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CSSModules from "react-css-modules";
/*import styles from "../../sass/main.module.scss";*/
const styles = require('../../sass/main.module.scss');

interface Props {
	next: string;
	prev: string;
}

function render({ next, prev }: Props) {
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

const Pagination: React.FC<Props> = ({ next, prev } : any) => (
	<Fragment>{render({ next, prev })}</Fragment>
);

export default CSSModules(Pagination, styles, { allowMultiple: true });
