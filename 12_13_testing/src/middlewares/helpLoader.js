import { fetchLoader } from "../saga/loader/loader.action";

const loader = (store) => (next) => (action) => {
	if (action.isLoading) {
		console.log('ff');
		if (action.productList != '') {
			console.log('---', fetchLoader);
		}
	}
	const result = next(action);
	return result;
};
export default loader;
