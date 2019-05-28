import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import App from './App';
import store from './saga';
import httpService from './api_client/interceptors';
import * as serviceWorker from './serviceWorker';

const history = createHistory();
httpService.setupInterceptors(store, history);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
