import { get, post, deletePost } from "./base";

export const fetchProductsRequest = (page) => {
	return get('posters/');    /* return promise*/
};

export const getSearchProducts = (searchQuery) => {
	return get(`/posters/?search=${searchQuery}`);
};

export const fetchOwnProductRequest = (data, headers) => {
	return get('posters/own/', data, headers);
};

export const fetchAddProductRequest = (data, headers) => {
	return post('posters/', data, headers);
};

export const fetchDeleteProductRequest = (data, headers) => {
	return deletePost(`posters/${data}/`, { "id": data }, headers);
};

