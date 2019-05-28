import axios from 'axios';
import { base_url } from '../app.config';

function request(method, url, data, headers, qs) {
	return axios({
		method,
		url: `${base_url}${url} `,
		data,
		headers,
		qs
	});
}

export const get = (url, data, headers) => {
	return request("get", url, data && data, headers && headers);
};

export const post = (url, data, headers) => {
	return request("post", url, data, headers && headers);
};

export const deletePost = (url, data, headers) => {
	console.log(url, data, headers);
	return request("delete", url, data, headers);
};
