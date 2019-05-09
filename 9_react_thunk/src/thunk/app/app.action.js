export const fetchProduct = () => (dispatch) => {
	dispatch({
		type: "FETCH_PRODUCTS_PENDING",
	});
	fetch('http://light-it-04.tk/api/posters/')
	.then((res) => {
		if (res.ok) {
			return res.json();
		}
		throw new Error('Something went wrong ...');
	})
	.then((res) =>
		dispatch({
			type: "FETCH_PRODUCTS_SUCCESS",
			payload: res.data,
			/*meta: {
				print: true,
			
			}*/
		}
	))
	.catch((error) =>
		dispatch({
			type: "FETCH_PRODUCTS_FAIL",
			meta: {
				print: true,
			
			}
		})
		
	)
};
