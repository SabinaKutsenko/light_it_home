import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchDeleteProductRequest } from '../../api_client/products';

export default function* watchFetchDeleteProduct() {
	yield takeEvery("FETCH_DELETE_PRODUCT_REQUEST", fetchDeleteProduct);
}

export function* fetchDeleteProduct(data) {
	yield put({ type: "FETCH_DELETE_PRODUCT_PENDING" });
	try {
		const token = localStorage.getItem("token");
		const headers = { 'Authorization': `JWT ${token}` };
		const result = yield call(fetchDeleteProductRequest, data.data, headers);
		alert('Post deleted');
		yield put({
			type: "FETCH_DELETE_PRODUCT_SUCCESS",
			payload: result.data.data,
		});
	} catch (error) {
		console.log(error);
		yield put({ type: "FETCH_DELETE_PRODUCT_FAIL", payload: error });
	}
}
