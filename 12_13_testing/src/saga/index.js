import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from "redux";

import createSagaMiddleware from "redux-saga";


import { reducer as formReducer } from "redux-form";
import rootSaga from "./store";

import products from "./products/products.reducer";
import searchProducts from "./search_products/search_products.reducer";
import add_product from "./add_product/add_product.reducer";
import delete_product from "./delete_product/delete_product.reducer";
import own_product from "./own_product/own_product.reducer";
import auth from "./auth/auth.reducer";

/*import helpLoader from "../middlewares/helpLoader";*/
/*import logger from "../middlewares/logger";*/

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ products, searchProducts, add_product, delete_product, own_product, auth, form: formReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(/*logger, helpLoader,*/ sagaMiddleware)));

sagaMiddleware.run(rootSaga);
export default store;
