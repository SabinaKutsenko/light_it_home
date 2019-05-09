import { all } from 'redux-saga/effects';

import watchFetchProducts from "./products/products.saga";
import watchFetchProductsSearch from "./search_products/search_products.saga";
import watchLoader from "./loader/loader.saga";
import watchFetchAuth from "./auth/auth.saga";

const rootSaga = function*() {
	yield all([
		watchFetchProducts(),
		watchFetchProductsSearch(),
		watchLoader(),
		watchFetchAuth()
	]);
};

export default rootSaga;
