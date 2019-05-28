import { all } from 'redux-saga/effects';

import watchFetchProducts from "./products/products.saga";
import watchFetchProductsSearch from "./search_products/search_products.saga";
import watchFetchAddProduct from "./add_product/add_product.saga";
import watchFetchDeleteProduct from "./delete_product/delete_product.saga";
import watchFetchOwnProduct from "./own_product/own_product.saga";
import watchFetchAuth from "./auth/auth.saga";

const rootSaga = function*() {
	yield all([
		watchFetchProducts(),
		watchFetchProductsSearch(),
		watchFetchAddProduct(),
		watchFetchDeleteProduct(),
		watchFetchOwnProduct(),
		watchFetchAuth()
	]);
};

export default rootSaga;
