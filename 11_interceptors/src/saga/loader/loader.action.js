export const fetchLoader = (val) => {
	switch (val) {
		case true:
			return {
				type: "REQUESTED_LOADER_ON",
			};
		case false:
		default:
			return 	{
				type: "REQUESTED_LOADER_OFF",
			};
	}
};

