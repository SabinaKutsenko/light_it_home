import { fetchLoader } from "../saga/loader/loader.action";

const loader = store => next => action => {
	/*console.log('eee');*/
	 if (action.isLoading) {
	 	console.log('ff');
	 	if (action.productList != '') {
	 		console.log('---',fetchLoader);	
	 	}
	 } 
	let result = next(action);
	return result
}
export default loader;