import { post, get } from "./base";

export const fetchAuthRequest = (data) => {
	return post("login/", data);
}

export const fetchAuthUpRequest = (data) => {
	return post("registration/", data);
}

export const fetchLogoutRequest = () => {
	return post("logout/");
}

export const fetchTokenRequest = (data) => {
	return post("token-verify/", data);
}

export const fetchProfileRequest = (data, headers) => {
	return get("profile/", data, headers);
}
