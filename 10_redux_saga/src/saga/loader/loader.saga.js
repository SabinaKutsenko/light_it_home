import { put, takeEvery } from 'redux-saga/effects';

export default function* watchLoader() {  /* <= dispatched actions*/
	yield takeEvery("REQUESTED_LOADER", setLoader);
}

export function* setLoader(val) {
	switch (val) {
		case true:
			yield put({ type: "REQUESTED_LOADER_ON" });
			break;
		case false:
		default:
			yield put({ type: "REQUESTED_LOADER_OFF" });
	}
}
