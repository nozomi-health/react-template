/* import axios from 'axios';

class HttpService {
  constructor(baseURL) {
    this.axios = axios.create({baseURL});
  }

  get(url, config) {
    return this.axios.get(url, config);
  }

  post(url, data, config) {
    return this.axios.post(url, data, config);
  }

  put(url, data, config) {
    return this.axios.put(url, data, config);
  }

  delete(url, config) {
    return this.axios.delete(url, config);
  }

  addRequestInterceptor(fn) {
    this.axios.interceptors.request.use((...args) => fn(...args));
  }

  addResponseInterceptor(responseFn, errorFn) {
    this.axios.interceptors.response.use(responseFn, errorFn);
  }
}

export default HttpService;
*/
