import axios from 'axios';
import { error } from 'console';

const instance = axios.create({
  baseURL: 'http://localhost:5171/api',
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
