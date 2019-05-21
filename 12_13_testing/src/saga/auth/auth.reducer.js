const initialState = {
	auth: false,
	authInfo: {},
	error: {}
};
export default function (state = initialState, action) {
	switch (action.type) {
		case "FETCH_AUTH_SUCCESS":
			return {
				auth: true,
				authInfo: action.payload,
				error: {}
			};
		case "FETCH_AUTH_FAIL":
			return {
				auth: false,
				authInfo: state.authInfo,
				error: action.error
			};
		case "FETCH_AUTH_OUT":
			return {
				auth: false,
				authInfo: {},
				error: {}
			};
		default:
			return state;
	}
}
