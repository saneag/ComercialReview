import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import {
  resetUserOnLogout,
  setAccessToken,
  setRefreshToken,
} from '@/app/redux/features/slices/userSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }: any) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshResult: any = await baseQuery(
      {
        url: '/users/refresh-token',
        method: 'POST',
        body: {
          refreshToken: api.getState().user.refreshToken,
        },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      api.dispatch(setAccessToken(refreshResult.data.accessToken));
      api.dispatch(setRefreshToken(refreshResult.data.refreshToken));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(resetUserOnLogout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: retry(baseQueryWithReAuth, { maxRetries: 3 }),
  endpoints: (builder) => ({}),
});
