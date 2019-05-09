import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";
import logger from "../middlewares/logger";


import { applyMiddleware, createStore, combineReducers } from "redux";

/*console.log(logger);*/

import app from "./app/app.reducer";


const rootReducer = combineReducers({ app/*, basket */});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk, /*logger, */)));

// store.dispatch(initialize());
export default store;