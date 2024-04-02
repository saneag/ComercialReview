import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';
import { UserType } from '@/app/types/user/UserType';

interface UserState {
  user: UserType | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
  role: UserRoleEnum;
}

const initialState: UserState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuth: false,
  role: UserRoleEnum.GUEST,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        user: UserType | null;
        isAuth: boolean;
      }>
    ) => {
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
    },
    setUserRole: (state, action: PayloadAction<UserRoleEnum>) => {
      state.role = action.payload;
    },
    setUserAfterUpdate: (
      state,
      action: PayloadAction<{ user: Omit<UserType, 'userId'> }>
    ) => {
      if (state.user) {
        const user = action.payload.user;
        state.user.firstName = user.firstName;
        state.user.lastName = user.lastName;
        state.user.email = user.email;
        state.user.avatarPath = user.avatarPath;
      }
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem('accessToken', action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
      localStorage.setItem('refreshToken', action.payload);
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    resetUserOnLogout: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
    getUserAccessToken: (state) => {
      state.accessToken = localStorage.getItem('accessToken') || null;
    },
    getUserRefreshToken: (state) => {
      state.refreshToken = localStorage.getItem('refreshToken') || null;
    },
  },
});

export const {
  setUser,
  setUserRole,
  setUserAfterUpdate,
  setAccessToken,
  setRefreshToken,
  setIsAuth,
  resetUserOnLogout,
  getUserAccessToken,
  getUserRefreshToken,
} = userSlice.actions;

export default userSlice.reducer;
