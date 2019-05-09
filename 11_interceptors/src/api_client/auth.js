import { post, get } from "./base";

/*const url = "login/";
const url = "logout/";*/

export const fetchAuthRequest = (data) => {
	return post("login/", data);    /* return promise*/ 
}

export const fetchAuthUpRequest = (data) => {
	return post("registration/", data);    /* return promise*/ 
}

export const fetchLogoutRequest = () => {
	return post("logout/");    /* return promise*/ 
}

export const fetchTokenRequest = (data) => {
	return post("token-verify/", data);    /* return promise*/ 
}

export const fetchProfileRequest = () => {
	return get("profile/");    /* return promise*/ 
}

