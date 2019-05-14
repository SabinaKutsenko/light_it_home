import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from "redux";

import createSagaMiddleware from "redux-saga";


import { reducer as formReducer } from "redux-form";
import rootSaga from "./store";

import products from "./products/products.reducer";
import searchProducts from "./search_products/search_products.reducer";
import add_product from "./add_product/add_product.reducer";
import auth from "./auth/auth.reducer";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ products, searchProducts, add_product, auth, form: formReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware( sagaMiddleware)));

sagaMiddleware.run(rootSaga);
export default store;
