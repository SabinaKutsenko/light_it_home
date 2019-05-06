import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

export default function* watchFetchProducts() {
	yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProducts);
}

export function* fetchProducts() {
	yield put({ type: "FETCH_PRODUCTS_PENDING" });
	yield put({ type: "REQUESTED_LOADER_ON" });
	try {
		const result = yield call(axios, 'http://light-it-04.tk/api/posters/');
		yield put({
			type: "FETCH_PRODUCTS_SUCCESS",
			payload: result.data.data,
			/*loading: true*/  /* <= we can use helpLoader */
		});
		yield put({ type: "REQUESTED_LOADER_OFF" });
	} catch (error) {
		yield put({ type: "FETCH_PRODUCTS_FAIL", payload: error });
		yield put({ type: "REQUESTED_LOADER_OFF" });
	}
}
