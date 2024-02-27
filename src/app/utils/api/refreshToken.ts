import mem from 'mem';

import axios from './axios.service';

const refreshTokenFn = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    if (accessToken && refreshToken) {
      const response = await axios.post(`/users/refresh-token`, {
        accessToken: accessToken,
        refreshToken: refreshToken,
      });

      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);

      return response.data.accessToken;
    }
  } catch (error) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, { maxAge });
