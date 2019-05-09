import { put, takeEvery, call, all } from 'redux-saga/effects';

export default function* watchLoader() {
	yield all([
		takeEvery("LOADER_ON", setLoaderOn),
		takeEvery("LOADER_OFF", setLoaderOff)
	])
}

export function* setLoaderOn() {
	yield put({ type: "LOADER_ON" })
}
export function* setLoaderOff() {
	yield put({ type: "LOADER_OFF"})
}