const logger = (store) => (next) => (action) => {
	console.log('middleware', action);
	if (action.meta) {
		if (action.meta.print === true) {
			console.log('dispatching', action);
			console.log('state', store.getState());
		}
	}
	const result = next(action);
	return result;
};
export default logger;
