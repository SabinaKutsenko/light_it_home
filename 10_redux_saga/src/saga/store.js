import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from "redux";

import createSagaMiddleware from "redux-saga";
import { all } from 'redux-saga/effects';

import { reducer as formReducer } from "redux-form";
import watchFetchProducts from "./products/products.saga";
import  watchFetchProductsSearch from "./search_products/search_products.saga";
import watchLoader from "./loader/loader.saga";
import watchFetchAuth from "./auth/auth.saga";

import products from "./products/products.reducer";
import searchProducts from "./search_products/search_products.reducer";
import loader from "./loader/loader.reducer";
import auth from "./auth/auth.reducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ products, searchProducts, loader, auth, form: formReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware( sagaMiddleware)));

const rootSaga = function*() {
	yield all([
		watchFetchProducts(),
		watchFetchProductsSearch(),
		watchLoader(),
		watchFetchAuth()
	]);
};

sagaMiddleware.run(rootSaga);
export default store;
