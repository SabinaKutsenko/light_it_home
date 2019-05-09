import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import store from "./thunk/store";
/*import store from "./saga/store";*/

/*import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk)))*/

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
document.getElementById('root'));
