import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RatingFilterEnum } from '@/app/types/enums/RatingFilterEnum';
import { ReviewFilterType } from '@/app/types/filter/EntityFilterType';

const initialState: ReviewFilterType = {
  rating: [RatingFilterEnum.ALL],
  category: [RatingFilterEnum.ALL],
};

const reviewsFilterSlice = createSlice({
  name: 'reviewsFilter',
  initialState,
  reducers: {
    setReviewRatingFilter(state, action: PayloadAction<number>) {
      if (action.payload === RatingFilterEnum.ALL) {
        state.rating = [RatingFilterEnum.ALL];
        return;
      }

      if (
        state.rating.length === 1 &&
        state.rating[0] === RatingFilterEnum.ALL
      ) {
        state.rating = [];
      }

      const index = state.rating.indexOf(action.payload);

      if (index === -1) {
        state.rating.push(action.payload);
      } else {
        state.rating.splice(index, 1);
      }
    },
    setReviewCategoryFilter(state, action: PayloadAction<number>) {
      if (action.payload === RatingFilterEnum.ALL) {
        state.category = [RatingFilterEnum.ALL];
        return;
      }

      if (
        state.category.length === 1 &&
        state.category[0] === RatingFilterEnum.ALL
      ) {
        state.category = [];
      }

      const index = state.category.indexOf(action.payload);
      if (index === -1) {
        state.category.push(action.payload);
      } else {
        state.category.splice(index, 1);
      }
    },
    resetReviewFilters(state) {
      state.rating = [RatingFilterEnum.ALL];
      state.category = [RatingFilterEnum.ALL];
    },
  },
});

export const {
  setReviewRatingFilter,
  setReviewCategoryFilter,
  resetReviewFilters,
} = reviewsFilterSlice.actions;

export default reviewsFilterSlice.reducer;
