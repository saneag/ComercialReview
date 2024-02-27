import { apiSlice } from '@/app/redux/features/baseQuery';
import { LoginType, RegisterType } from '@/app/types/auth/AuthType';
import { UserLoginType, UserType } from '@/app/types/user/UserType';

const userApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['User'],
});

export const userApi = userApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    getUser: builder.query<UserType, number>({
      query: (userId) => `/users/${userId}`,
      providesTags: ['User'],
    }),
    loginUser: builder.mutation<UserLoginType, Partial<LoginType>>({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    registerUser: builder.mutation<void, Partial<RegisterType>>({
      query: (body) => ({
        url: '/users/register',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: '/users/reset-password',
        method: 'POST',
        body,
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: (body) => ({
        url: '/users/reset-password-confirm',
        method: 'POST',
        body,
      }),
    }),
    updateUser: builder.mutation<
      void,
      { body: Partial<UserType>; userId: number }
    >({
      query: ({ body, userId }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
    }),
    checkUserName: builder.query<void, string>({
      query: (userName) => `/users/checkUserName?nameToCheck=${userName}`,
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
