const initialState = {
	isLoading: true,
	productsList: []
};

export default function(state = initialState, action) {
	console.log('thunks');

	switch (action.type) {
		case "FETCH_PRODUCTS_PENDING":
			return {
				productsList: state.productsList,
				isLoading: false,
			};
		case "FETCH_PRODUCTS_SUCCESS":
			return {
				productsList: action.payload,
				isLoading: true,
			};
		case "FETCH_PRODUCTS_FAIL":
			return  {
				productsList: state.productsList,
				isLoading: false,
			};
		default:
			return state;
	}
}
