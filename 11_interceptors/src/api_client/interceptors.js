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
        history.push('/login');
        store.dispatch(fetchAuthOut());

      }

      if (error.response.status === 404) {
         history.push('/not-found');
      }

      if (error.response.status === 500) {
         console.log(error.response.data);
      }

      return Promise.reject(error);
    });
  },
};
