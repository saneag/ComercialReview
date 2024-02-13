import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/app/redux/features/axiosBaseQuery';
import { UserType } from '@/app/types/UserType';

export const userApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  tagTypes: ['User'],
  reducerPath: 'userApi',
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
    getUser: builder.query<UserType, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
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
        url: '/users/create',
        method: 'POST',
        data: {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          password: body.password,
          userName: body?.userName,
        },
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: '/users/reset-password',
        method: 'POST',
        data: body,
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: (body) => ({
        url: '/users/reset-password-confirm',
        method: 'POST',
        data: body,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ body, userId }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        data: body,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
    }),
    checkUserName: builder.query({
      query: (userName) => ({
        url: `/users/checkUserName?nameToCheck=${userName}`,
        method: 'GET',
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
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useCheckUserNameQuery,
} = userApi;
