const logger = store => next => action => {
	console.log('test77', action);
	 if (action.meta) {
	 	if (action.meta.print === true) {
	 			console.log('dispatching', action);
				console.log('state', store.getState());
	 	}
	
	 } 
	let result = next(action);
	return result
}
export default logger;