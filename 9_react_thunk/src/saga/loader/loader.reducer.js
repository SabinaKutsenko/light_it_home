const initialState = {
	isLoading: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case "LOADER_ON":
			return {
				isLoading: true,
			};
		case "LOADER_OFF":
			return  {
				isLoading: false,
			};
		default:
			return state;
	}
}