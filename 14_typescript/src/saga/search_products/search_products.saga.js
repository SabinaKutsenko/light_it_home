import { put, call, takeEvery } from 'redux-saga/effects';

import { getSearchProducts } from '../../api_client/products';

export default function* watchFetchProductsSearch() {
	yield takeEvery("FETCH_SEARCH_PRODUCTS_REQUEST", fetchProductsSearch);
	yield takeEvery("FETCH_SEARCH_PRODUCTS_CLEAN_REQUEST", fetchProductsSearchClean);
}

export function* fetchProductsSearch(data) {
	try {
		const { searchQuery } = data;
		const result = yield call(getSearchProducts, searchQuery);
		yield put({ type: "FETCH_SEARCH_PRODUCTS_SET", payload: result.data.data });
	} catch (error) {
		console.log(error);
		yield put({ type: "FETCH_SEARCH_PRODUCTS_CLEAN", error }) ;
	}
}

export function* fetchProductsSearchClean() {
	yield put({ type: "FETCH_SEARCH_PRODUCTS_CLEAN" }) ;
}
