import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchOwnProductRequest } from '../../api_client/products';

export default function* watchFetchOwnProduct() {
	yield takeEvery("FETCH_OWN_PRODUCT_REQUEST", fetchOwnProduct);
}

export function* fetchOwnProduct() {
	try {
		const token = localStorage.getItem("token");
		const headers = { 'Authorization': `JWT ${token}` };
		const result = yield call(fetchOwnProductRequest, '', headers);
		yield put({
			type: "FETCH_OWN_PRODUCT_SUCCESS",
			payload: result.data.data,
		});
	} catch (error) {
		yield put({ type: "FETCH_OWN_PRODUCT_FAIL", payload: error });
	}
}
