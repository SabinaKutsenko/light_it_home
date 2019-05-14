import { all } from 'redux-saga/effects';

import watchFetchProducts from "./products/products.saga";
import watchFetchProductsSearch from "./search_products/search_products.saga";
import watchFetchAddProduct from "./add_product/add_product.saga";
import watchFetchAuth from "./auth/auth.saga";

const rootSaga = function*() {
	yield all([
		watchFetchProducts(),
		watchFetchProductsSearch(),
		watchFetchAddProduct(),
		watchFetchAuth()
	]);
};

export default rootSaga;
