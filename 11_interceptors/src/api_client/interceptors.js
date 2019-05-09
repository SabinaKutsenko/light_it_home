import axios from 'axios';
import { fetchAuthOut } from "../saga/auth/auth.action";



export default {
  setupInterceptors: (store, history) => {

      axios.interceptors.response.use(response => {
        return response;
      }, error => {
        if (error.response.status === 400) {
         /* console.log(error.response.data);*/

        }

      if (error.response.status === 401) {
        store.dispatch(fetchAuthOut());
        history.push('/login');

      }

      if (error.response.status === 404) {
         history.push('/not-found');
      }

      return Promise.reject(error);
    });
  },
};
