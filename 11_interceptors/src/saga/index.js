import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from "redux";

import createSagaMiddleware from "redux-saga";


import { reducer as formReducer } from "redux-form";
import rootSaga from "./store";

import products from "./products/products.reducer";
import searchProducts from "./search_products/search_products.reducer";
import loader from "./loader/loader.reducer";
import auth from "./auth/auth.reducer";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ products, searchProducts, loader, auth, form: formReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware( sagaMiddleware)));

sagaMiddleware.run(rootSaga);
export default store;
