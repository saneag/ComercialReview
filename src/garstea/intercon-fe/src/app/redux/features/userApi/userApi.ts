import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/app/redux/features/axiosBaseQuery';
import { UserType } from '@/app/types/UserType';

export const userApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
    }),
    getUser: builder.query<UserType, number>({
      query: (id) => ({
        url: '/user',
        method: 'GET',
      }),
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '/user',
        method: 'POST',
        data: body,
      }),
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: '/user',
        method: 'PUT',
        data: body,
      }),
    }),
    deleteUser: builder.mutation({
      query: (body) => ({
        url: '/user',
        method: 'DELETE',
        data: body,
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetUsersQuery } = userApi;
