import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchProductsRequest } from '../../api_client/products';

export default function* watchFetchProducts() {
	yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProducts);
}

export function* fetchProducts() {
	yield put({ type: "FETCH_PRODUCTS_PENDING" });
	try {
		const result = yield call(fetchProductsRequest);
		yield put({
			type: "FETCH_PRODUCTS_SUCCESS",
			payload: result.data.data,
		});
	} catch (error) {
		yield put({ type: "FETCH_PRODUCTS_FAIL", payload: error });
	}
}
