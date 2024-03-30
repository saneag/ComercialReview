import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PaginationType } from '@/app/types/PaginationType';

const initialState: PaginationType = {
  pageIndex: 1,
  pageSize: 6,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageIndex: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setPage: (state, action: PayloadAction<PaginationType>) => {
      state.pageIndex = action.payload.pageIndex;
      state.pageSize = action.payload.pageSize;
    },
    resetPagination: (state) => {
      state.pageIndex = 1;
      state.pageSize = 6;
    },
    resetPaginationToValue: (state, action: PayloadAction<PaginationType>) => {
      state.pageIndex = action.payload.pageIndex;
      state.pageSize = action.payload.pageSize;
    },
  },
});

export const {
  setPageIndex,
  setPageSize,
  setPage,
  resetPagination,
  resetPaginationToValue,
} = paginationSlice.actions;

export default paginationSlice.reducer;
