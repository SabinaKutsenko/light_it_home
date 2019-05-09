import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from "redux";

import createSagaMiddleware from "redux-saga";
import { takeEvery, all } from 'redux-saga/effects';

import watchFetchPost from "./products/products.saga";
import watchLoader from "./loader/loader.saga";

import products from "./products/products.reducer";
import loader from "./loader/loader.reducer";
import form from "./loader/loader.reducer";

import helpLoader from "../middlewares/helpLoader";
/*import logger from "../middlewares/logger";*/

/* add Redux- form */
import { reducer as formReducer } from "redux-form";



const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ products, loader, form: formReducer /*, basket */});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware( /*logger, */ sagaMiddleware, helpLoader)));

const rootSaga = function*() {
	yield all([
		watchFetchPost(),
		watchLoader()
	])
}
/* or */
/*function* watchAll() {
  yield all([
  	takeEvery("LOADER_REQUEST", setLoader),
    takeEvery("FETCH_PRODUCTS_REQUEST", fetchPosts)
  ]);
}
const rootSaga = function*() {
	yield all([
		watchAll()
	])
}*/

sagaMiddleware.run(rootSaga);
export default store;