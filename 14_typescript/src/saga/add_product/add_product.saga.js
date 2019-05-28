import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchAddProductRequest } from '../../api_client/products';

export default function* watchFetchAddProduct() {
	yield takeEvery("FETCH_ADD_PRODUCT_REQUEST", fetchAddProduct);
}

export function* fetchAddProduct(data) {
	yield put({ type: "FETCH_ADD_PRODUCTS_PENDING" });
	try {
		console.log(data);
		const token = localStorage.getItem("token");
		const headers = { 'Authorization': `JWT ${token}` };
		const result = yield call(fetchAddProductRequest, data.data, headers);
		yield put({
			type: "FETCH_ADD_PRODUCTS_SUCCESS",
			payload: result.data.data,
		});
	} catch (error) {
		console.log(error);
		yield put({ type: "FETCH_ADD_PRODUCTS_FAIL", payload: error });
	}
}
