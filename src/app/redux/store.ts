import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiSlice } from '@/app/redux/features/baseQuery';
import businessFilterSlice from '@/app/redux/features/slices/businessFilterSlice';
import paginationSlice from '@/app/redux/features/slices/paginationSlice';
import reviewsFilterSlice from '@/app/redux/features/slices/reviewsFilterSlice';
import userSlice from '@/app/redux/features/slices/userSlice';
import { rtkQueryErrorLogger } from '@/app/redux/rtkQueryErrorLogger';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  user: userSlice,
  reviewsFilter: reviewsFilterSlice,
  businessFilter: businessFilterSlice,
  pagination: paginationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(apiSlice.middleware)
      .concat(rtkQueryErrorLogger),
  devTools: process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
