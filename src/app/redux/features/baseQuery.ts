import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { jwtDecode } from 'jwt-decode';

import {
  resetUserOnLogout,
  setAccessToken,
  setRefreshToken,
  setUser,
} from '@/app/redux/features/slices/userSlice';
import { UserJwtClaimsEnum } from '@/app/types/enums/UserJwtClaimsEnum';
import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }: any) => {
    const accessToken = getState().user.accessToken;

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
          accessToken: api.getState().user.accessToken,
          refreshToken: api.getState().user.refreshToken,
        },
      },
      api,
      extraOptions
    );

    console.log('refreshResult', refreshResult);

    if (refreshResult.data) {
      api.dispatch(setAccessToken(refreshResult.data.accessToken));
      api.dispatch(setRefreshToken(refreshResult.data.refreshToken));

      const decodedToken: any = jwtDecode(refreshResult.data.accessToken);

      const userId = decodedToken[UserJwtClaimsEnum.UserId];
      const email = decodedToken[UserJwtClaimsEnum.Email];
      const firstName = decodedToken[UserJwtClaimsEnum.FirstName];
      const lastName = decodedToken[UserJwtClaimsEnum.LastName];
      const role = decodedToken[UserJwtClaimsEnum.Role];

      api.dispatch(
        setUser({
          user: {
            userId: Number(userId),
            firstName,
            lastName,
            email,
          },
          isAuth: true,
          role: Number(role) as UserRoleEnum,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(resetUserOnLogout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
