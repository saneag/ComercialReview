import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';
import { UserType } from '@/app/types/UserType';

interface UserState {
  user: UserType;
  accessToken: string;
  refreshToken: String;
  isAuth: boolean;
  role: UserRoleEnum;
}

const initialState: UserState = {
  user: {} as UserType,
  accessToken: '',
  refreshToken: '',
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
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    resetUserOnLogout: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setUser,
  setAccessToken,
  setRefreshToken,
  setIsAuth,
  resetUserOnLogout,
} = userSlice.actions;

export default userSlice.reducer;
