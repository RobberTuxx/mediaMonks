import axios from 'axios';

const AxiosService = function () {
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Accept = 'application/json';

  async function get(endPoint: string) {
    return axios.get(endPoint);
  }
  return {get};
};

export default AxiosService();
