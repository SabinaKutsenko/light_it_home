export const fetchAuth = (data) => ({
	type: "FETCH_AUTH_REQUEST", data
});

export const fetchAuthUp = (data) => ({
	type: "FETCH_AUTH_UP", data
});

export const fetchAuthOut = () => ({
	type: "FETCH_AUTH_LOGOUT"
});

export const fetchAuthCheckToken = (data) => ({
	type: "FETCH_AUTH_CHECK_TOKEN", data
});

