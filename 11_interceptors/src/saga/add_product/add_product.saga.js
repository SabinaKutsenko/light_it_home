import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchAddProductRequest } from '../../api_client/products';

export default function* watchFetchProducts() {
	yield takeEvery("FETCH_ADD_PRODUCT_REQUEST", fetchAddProduct);
}

export function* fetchAddProduct(data) {
	yield put({ type: "FETCH_ADD_PRODUCTS_PENDING" });
	try {
		console.log(data);
		const token = localStorage.getItem("token");
		let headers = {
		    'Authorization': `JWT ${token}`
		  };
		const result = yield call(fetchAddProductRequest, data, headers /*{
			"theme":data.data.theme,
			"text": data.data.text,
			"price": data.data.price,
			"currency": data.data.currency,
			"contract_price": data.data.contract_price,
			"location": data.data.location,
			"is_active": data.data.is_active
		}*/);
		yield put({
			type: "FETCH_ADD_PRODUCTS_SUCCESS",
			payload: result.data.data,
		});
	} catch (error) {
		console.log(error);
		yield put({ type: "FETCH_ADD_PRODUCTS_FAIL", payload: error });
	}
}
