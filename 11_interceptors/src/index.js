import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import App from './App';
import store from './saga';

import createHistory from 'history/createBrowserHistory';
import httpService from './api_client/interceptors';

const history = createHistory();
httpService.setupInterceptors(store, history);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'));
