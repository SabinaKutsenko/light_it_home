import { put, takeEvery, call, all } from 'redux-saga/effects';
import axios from 'axios';

export default function* watchFetchPost() {
	yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchPosts);
}

export function* fetchPosts() {

	yield put({ type: "FETCH_PRODUCTS_PENDING" });

	try {
		const result = yield call(axios, 'http://light-it-04.tk/api/posters/');
		yield put({ type: "FETCH_PRODUCTS_SUCCESS", payload: result.data.data });
		yield put({ type: "LOADER_ON" })

	} catch (error) {
		yield put({ type: "FETCH_PRODUCTS_FAIL", payload: error });
		yield put({ type: "LOADER_OFF" })
	}

}