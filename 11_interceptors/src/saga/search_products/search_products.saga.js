import { put, takeEvery } from 'redux-saga/effects';

export default function* watchFetchProductsSearch() {
	yield takeEvery("FETCH_SEARCH_PRODUCTS_REQUEST", fetchProductsSearch);
	yield takeEvery("FETCH_SEARCH_PRODUCTS_CLEAN_REQUEST", fetchProductsSearchClean);
}

export function* fetchProductsSearch(data) {
	const { searchQuery, productsList } = data;

	//Get array search products
	const filtered = productsList.filter((item) =>
		item['theme'].toLowerCase().includes(searchQuery)
	);

	yield put({ type: "FETCH_SEARCH_PRODUCTS_SET", payload: filtered }) ;
}
export function* fetchProductsSearchClean() {
	yield put({ type: "FETCH_SEARCH_PRODUCTS_CLEAN" }) ;
}
