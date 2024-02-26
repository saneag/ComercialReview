import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/app/redux/features/axiosBaseQuery';
import { LoginType, RegisterType } from '@/app/types/auth/AuthType';
import { UserLoginType, UserType } from '@/app/types/user/UserType';

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
    loginUser: builder.mutation<UserLoginType, Partial<LoginType>>({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        data: body,
      }),
    }),
    registerUser: builder.mutation<void, Partial<RegisterType>>({
      query: (body) => ({
        url: '/users/register',
        method: 'POST',
        data: {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          password: body.password,
          userName: body.userName || null,
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
    updateUser: builder.mutation<
      void,
      { body: Partial<UserType>; userId: number }
    >({
      query: ({ body, userId }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        data: body,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
    }),
    checkUserName: builder.query<void, string>({
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
  useRegisterUserMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useCheckUserNameQuery,
} = userApi;
