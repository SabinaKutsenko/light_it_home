const initialState = {
	productList: []
};
export default function(state = initialState, action) {
	switch (action.type) {
		case "FETCH_PRODUCTS_SUCCESS":
			return {
				productList: action.payload,
			};
		case "FETCH_PRODUCTS_FAIL":
			return  {
				productList: state.productList,
			};
		default:
			return state;
	}
}