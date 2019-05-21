const initialState = {
	loading: false,
	error: {},
	request: ""
};

export default function (state = initialState, action) {
	switch (action.type) {
		case "FETCH_ADD_PRODUCT_PENDING":
			return {
				loading: true,
				error: {}
			};
		case "FETCH_ADD_PRODUCT_SUCCESS":
			return {
				loading: false,
				request: action.payload,
				error: {}
			};
		case "FETCH_ADD_PRODUCT_FAIL":
			return {
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
}
