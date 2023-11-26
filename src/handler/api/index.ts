import axios from 'axios';

const api = axios.create({ baseURL: 'http://fakebase-url.com' });

api.interceptors.request.use(
  async (config) => {
    const token = 'looplex-user-token';
    config.timeout = 5000;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    throw new Error(error);
  }
);

export default api;
