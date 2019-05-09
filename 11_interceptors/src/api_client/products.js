import { get } from "./base";

const url = "posters/"

export const fetchProductsRequest = (page) => {
	return get(url);    /* return promise*/ 
}

/* yield call ( fetchProduct );*/