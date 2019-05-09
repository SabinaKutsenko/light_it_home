import axios from 'axios';
import {base_url} from '../app.config';

function request ( method, url , data, qs ) {
	return axios({
		method,
		url: `${base_url}${url} `,
		data,
		qs
		});		
		/*puch\put ( частичное обновление \ полное )*/
}


export const get = (url, data ) => {
	return request( "get", url, data );
}

export const post = (url, data) => {
	return request( "post", url, data );
}
