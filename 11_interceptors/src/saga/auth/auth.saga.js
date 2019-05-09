import { put, takeEvery, call } from 'redux-saga/effects';
/*import axios from 'axios';*/
import { fetchAuthRequest, fetchAuthUpRequest, fetchLogoutRequest, fetchTokenRequest, fetchProfileRequest } from '../../api_client/auth';
export default function* watchFetchAuth() {
	yield takeEvery("FETCH_AUTH_CHECK_TOKEN", fetchAuthCheckToken);
	yield takeEvery("FETCH_AUTH_REQUEST", fetchAuth);
	yield takeEvery("FETCH_AUTH_UP", fetchAuthUp);
	yield takeEvery("FETCH_AUTH_LOGOUT", fetchAuthOut);

}

export function* fetchAuth(data) {
	try {
		const result = yield call(fetchAuthRequest,{"email":data.data.email, "password": data.data.password});
		localStorage.setItem("token", result.data.token); /* removeItem*/
		yield put({ type: "FETCH_AUTH_SUCCESS", payload: result.data.user});
	} catch(error) {
		yield put({ type: "FETCH_AUTH_FAIL", error: error.response.data });
	}
	/*const getUser = db.findIndex((x) => (x.email === data.data.email) && (x.password === data.data.password));*/
}

export function* fetchAuthUp(data) {
	try {
		const result = yield call(fetchAuthUpRequest,{"username":data.data.username,"email":data.data.email, "password1": data.data.password, "password2": data.data.password2});
		console.log(result);
		localStorage.setItem("token", result.data.token); 
		yield put({ type: "FETCH_AUTH_SUCCESS", payload: result.data.user});

	} catch(error) {
		yield put({ type: "FETCH_AUTH_FAIL", error: error.response.data });
	}
}

export function* fetchAuthOut() {
	const result = yield call(fetchLogoutRequest());

	yield localStorage.removeItem('token');
	yield put({ type: "FETCH_AUTH_OUT" });
}

export function* fetchAuthCheckToken(data) {
	try {
		const resultToken = yield call(fetchTokenRequest, {"token": data.data});
		console.log(resultToken);
		const result = yield call(fetchProfileRequest);
		console.log('res2',result);
		yield put({ type: "FETCH_AUTH_CHECK" });
	} catch {
		console.log(data);
		yield put({ type: "FETCH_AUTH_OUT" });
	}	
}