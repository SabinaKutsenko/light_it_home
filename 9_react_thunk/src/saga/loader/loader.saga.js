import { put, takeEvery, call, all } from 'redux-saga/effects';

export default function* watchLoader() {
	/*yield takeEvery("LOADER_REQUEST", setLoader)*/
	/*yield all([*/
		takeEvery("LOADER_ON", setLoaderOn),
		takeEvery("LOADER_OFF", setLoaderOff)
	/*])*/
}

export function* setLoaderOn() {
	console.log('true');
	yield put({ type: "LOADER_ON" })
}
export function* setLoaderOff() {
	console.log('false');
	yield put({ type: "LOADER_OFF"})
}