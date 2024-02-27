import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiSlice } from '@/app/redux/features/baseQuery';
import { businessApi } from '@/app/redux/features/businessApi/businessApi';
import { reviewApi } from '@/app/redux/features/reviewApi/reviewApi';
import businessFilterSlice from '@/app/redux/features/slices/businessFilterSlice';
import reviewsFilterSlice from '@/app/redux/features/slices/reviewsFilterSlice';
import userSlice from '@/app/redux/features/slices/userSlice';
import { userApi } from '@/app/redux/features/userApi/userApi';
import { rtkQueryErrorLogger } from '@/app/redux/rtkQueryErrorLogger';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [businessApi.reducerPath]: businessApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  user: userSlice,
  reviewsFilter: reviewsFilterSlice,
  businessFilter: businessFilterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(apiSlice.middleware)
      .concat(userApi.middleware)
      .concat(businessApi.middleware)
      .concat(reviewApi.middleware)
      .concat(rtkQueryErrorLogger),
  devTools: process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
