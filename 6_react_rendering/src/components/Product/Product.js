import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { object } from "prop-types";

class Product extends Component {
	static propTypes = {
		post: object,
	}

	renderItem = () => {
		const { post } = this.props;
		let next = (post.id + 1) > 15 ? 0 : (post.id + 1);

		return (
			<div>
				<div >
					<h1>{ post.title }</h1>
					<h4>{ post.body }</h4>
					<img src={ post.img } alt={post.title}/>

					<button>
						<Link to="/">
							Back to homepage
						</Link>
					</button>
					<button>
						<Link to={`/homepage/${next}`}>
							Next product
						</Link>
					</button>
				</div>
			</div>
		);
	}

	render() {
		const { posts } = this.props;

		return (

			<>
				{ posts.length === 0 ?
					<div> Loader </div>
					:
					this.renderItem()
				}
			</>
		);
	}
}

export default Product;
