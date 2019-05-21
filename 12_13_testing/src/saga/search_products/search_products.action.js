export const fetchProductsSearch = (searchQuery) => {
	if (searchQuery) {
		return { type: "FETCH_SEARCH_PRODUCTS_REQUEST", searchQuery };
	}
	return { type: "FETCH_SEARCH_PRODUCTS_CLEAN_REQUEST" };
};
