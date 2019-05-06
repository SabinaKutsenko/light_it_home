const initialState = {
	loading: false,
	error: false
};

export default function (state = initialState, action) {
	switch (action.type) {
		case "REQUESTED_LOADER_ON":
			return {
				loading: true,
			};
		case "REQUESTED_LOADER_OFF":
			return  {
				loading: false,
			};
		default:
			return state;
	}
}
