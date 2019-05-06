import { put, takeEvery } from 'redux-saga/effects';
/*import axios from 'axios';*/

export default function* watchFetchAuth() {
	yield takeEvery("FETCH_AUTH_REQUEST", fetchAuth);
	yield takeEvery("FETCH_AUTH_LOGOUT", fetchAuthOut);
}

export function* fetchAuth(data) {
	yield put({ type: "FETCH_AUTH_PENDING" });
	yield put({ type: "LOADER_ON" });
	const db = require("../../assets/db/db.json");
	const getUser = db.findIndex((x) => (x.email === data.data.email) && (x.password === data.data.password));

	if (db[getUser]) {
		yield put({ type: "FETCH_AUTH_SUCCESS", payload: db[getUser] });
		yield put({ type: "LOADER_OFF" });
	} else {
		yield put({ type: "FETCH_AUTH_FAIL" });
		yield put({ type: "LOADER_OFF" });
	}
}

export function* fetchAuthOut() {
	yield put({ type: "FETCH_AUTH_OUT" });
}
