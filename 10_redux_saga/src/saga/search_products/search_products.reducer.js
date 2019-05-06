const initialState = {
	productsSearchResult: [],
};
export default function (state = initialState, action) {
	switch (action.type) {
		case "FETCH_SEARCH_PRODUCTS_SET":
			return {
				productsSearchResult: action.payload,
			};
		case "FETCH_SEARCH_PRODUCTS_CLEAN":
			return {
				productsSearchResult: [],
			};
		default:
			return state;
	}
}
