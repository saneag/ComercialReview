import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/app/redux/features/axiosBaseQuery';
import { UserType } from '@/app/types/UserType';

export const userApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
    getUser: builder.query<UserType, number>({
      query: (id) => ({
        url: '/users',
        method: 'GET',
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        data: body,
      }),
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        data: {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          password: body.password,
        },
      }),
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'PUT',
        data: body,
      }),
    }),
    deleteUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'DELETE',
        data: body,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useLazyGetUserQuery,
  useLazyGetUsersQuery,
  useLoginUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
