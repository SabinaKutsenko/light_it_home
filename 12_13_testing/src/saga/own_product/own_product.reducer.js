const initialState = {
	productOwnList: [],
};
export default function (state = initialState, action) {
	switch (action.type) {
		case "FETCH_OWN_PRODUCT_PENDING":
			return {
				productOwnList: state.productOwnList,
			};
		case "FETCH_OWN_PRODUCT_SUCCESS":
			return {
				productOwnList: action.payload,
			};
		case "FETCH_OWN_PRODUCT_FAIL":
			return {
				productOwnList: state.productOwnList,
				/*error: action.error*/
			};
		default:
			return state;
	}
}
