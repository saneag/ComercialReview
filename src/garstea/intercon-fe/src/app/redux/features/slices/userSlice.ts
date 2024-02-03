import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '@/app/types/UserType';

interface UserState {
  user: UserType;
  accessToken: string;
  refreshToken: String;
}

const initialState = {
  user: {} as UserType,
  accessToken: '',
  refreshToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { setUser, setAccessToken, setRefreshToken } = userSlice.actions;

export default userSlice.reducer;
