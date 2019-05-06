const initialState = {
	productsList: [],
	productsStatus: ""
};
export default function (state = initialState, action) {
	switch (action.type) {
		case "FETCH_PRODUCTS_PENDING":
			return {
				productsList: state.productsList,
				productsStatus: "pending",
			};
		case "FETCH_PRODUCTS_SUCCESS":
			return {
				productsList: action.payload,
				productsStatus: "success",
			};
		case "FETCH_PRODUCTS_FAIL":
			return {
				productsList: state.productList,
				productsStatus: "fail",
				/*error: action.error*/
			};
		default:
			return state;
	}
}
