export const fetchProductsSearch = (searchQuery, productsList) => {
	if (searchQuery) {
		return { type: "FETCH_SEARCH_PRODUCTS_REQUEST", searchQuery, productsList };
	}
	return { type: "FETCH_SEARCH_PRODUCTS_CLEAN_REQUEST" };
};
