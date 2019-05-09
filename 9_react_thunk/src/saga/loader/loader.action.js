export const fetchLoader = (val) => {
	switch (val) {
		case true: 
			return {
				type: "LOADER_ON",
			}
		case false: 
		default:
		return 	{
			type: "LOADER_OFF",
		}
	}
}