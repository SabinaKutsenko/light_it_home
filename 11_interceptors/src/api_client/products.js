import { get, post } from "./base";

export const fetchProductsRequest = (page) => {
	return get('posters/');    /* return promise*/ 
}

export const getSearchProducts = (searchQuery) => {
	return get('/posters/?search=' + searchQuery);    /* return promise*/ 
}

export const fetchAddProductRequest = (data, headers) => {
	return post('posters/', data, headers );    /* return promise*/ 
}

/* yield call ( fetchProduct );*/