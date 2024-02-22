import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';
import { UserType } from '@/app/types/UserType';

interface UserState {
  user: UserType | null;
  token: string | null;
  refreshToken: string | null;
  isAuth: boolean;
  role: UserRoleEnum;
}

const initialState: UserState = {
  user: null,
  token: null,
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
        user: UserType;
        isAuth: boolean;
        role: UserRoleEnum;
      }>
    ) => {
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
      state.role = action.payload.role;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    resetUserOnLogout: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem('token');
    },
    getUserToken: (state) => {
      state.token = localStorage.getItem('token') || null;
    },
  },
});

export const {
  setUser,
  setToken,
  setRefreshToken,
  setIsAuth,
  resetUserOnLogout,
  getUserToken,
} = userSlice.actions;

export default userSlice.reducer;
