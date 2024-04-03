import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RatingFilterEnum } from '@/app/types/enums/RatingFilterEnum';
import { ReviewFilterType } from '@/app/types/filter/EntityFilterType';
import { SortType } from '@/app/types/SortType';

const initialState: ReviewFilterType = {
  rating: [RatingFilterEnum.ALL],
  search: '',
  sort: {
    sortBy: '',
    sortOrder: 'asc',
  },
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

        if (state.rating.length === 0) {
          state.rating.push(RatingFilterEnum.ALL);
        }
      }
    },
    setReviewSearchFilter(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setReviewSortFilter(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    removeReviewRatingFilter(state, action: PayloadAction<number>) {
      if (action.payload === RatingFilterEnum.ALL) {
        return;
      }

      const index = state.rating.indexOf(action.payload);
      if (index !== -1) {
        state.rating.splice(index, 1);
      }

      if (state.rating.length === 0) {
        state.rating.push(RatingFilterEnum.ALL);
      }
    },
    removeReviewSearchFilter(state) {
      state.search = '';
    },
    removeReviewSortFilter(state) {
      state.sort = {
        sortBy: '',
        sortOrder: 'asc',
      };
    },
    resetReviewFilters(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setReviewRatingFilter,
  setReviewSearchFilter,
  setReviewSortFilter,
  removeReviewSearchFilter,
  removeReviewSortFilter,
  removeReviewRatingFilter,
  resetReviewFilters,
} = reviewsFilterSlice.actions;

export default reviewsFilterSlice.reducer;
