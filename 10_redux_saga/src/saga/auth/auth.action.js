export const fetchAuth = (data) => ({
	type: "FETCH_AUTH_REQUEST", data
});
export const fetchAuthOut = () => ({
	type: "FETCH_AUTH_LOGOUT"
});
