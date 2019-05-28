import { fetchLoader } from "../saga/loader/loader.action";

const logger = (store) => (next) => (action) => {
	console.log('middleware', action);
	if (action.meta) {
		if (action.meta.print === true) {
			console.log('dispatching', action);
			console.log('state', store.getState());
		}
	}
	if (action.isLoading) {
		console.log('ff');
		if (action.productList != '') {
			console.log('---', fetchLoader);
		}
	}
	const result = next(action);
	return result;
};
export default logger;
