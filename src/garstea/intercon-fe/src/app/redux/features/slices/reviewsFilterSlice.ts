import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ReviewFilterType } from '@/app/types/ReviewFilterType';

const initialState: ReviewFilterType = {
  rating: [],
};

const reviewsFilterSlice = createSlice({
  name: 'reviewsFilter',
  initialState,
  reducers: {
    setRatingFilter(state, action: PayloadAction<number>) {
      const index = state.rating.indexOf(action.payload);
      if (index === -1) {
        state.rating.push(action.payload);
      } else {
        state.rating.splice(index, 1);
      }
    },
  },
});

export const { setRatingFilter } = reviewsFilterSlice.actions;

export default reviewsFilterSlice.reducer;