import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';
import { RatingFilterEnum } from '@/app/types/enums/RatingFilterEnum';
import { BusinessFilterType } from '@/app/types/filter/EntityFilterType';

const initialState: BusinessFilterType = {
  rating: [RatingFilterEnum.ALL],
  category: [CategoryFilterEnum.ALL],
};

const businessFilterSlice = createSlice({
  name: 'businessFilter',
  initialState,
  reducers: {
    setBusinessRatingFilter(state, action: PayloadAction<number>) {
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
    setBusinessesCategoryFilter(state, action: PayloadAction<number>) {
      if (action.payload === CategoryFilterEnum.ALL) {
        state.category = [CategoryFilterEnum.ALL];
        return;
      }

      if (
        state.category.length === 1 &&
        state.category[0] === CategoryFilterEnum.ALL
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
    removeBusinessRatingFilter(state, action: PayloadAction<number>) {
      if (action.payload === RatingFilterEnum.ALL) {
        return;
      }

      const index = state.rating.indexOf(action.payload);
      if (index !== -1) {
        state.rating.splice(index, 1);
      }

      if (state.rating.length === 0) {
        state.rating = [RatingFilterEnum.ALL];
      }
    },
    removeBusinessCategoryFilter(state, action: PayloadAction<number>) {
      if (action.payload === CategoryFilterEnum.ALL) {
        return;
      }

      const index = state.category.indexOf(action.payload);
      if (index !== -1) {
        state.category.splice(index, 1);
      }

      if (state.category.length === 0) {
        state.category = [CategoryFilterEnum.ALL];
      }
    },
    resetBusinessFilters(state) {
      state.rating = [RatingFilterEnum.ALL];
      state.category = [CategoryFilterEnum.ALL];
    },
  },
});

export const {
  setBusinessRatingFilter,
  setBusinessesCategoryFilter,
  removeBusinessRatingFilter,
  removeBusinessCategoryFilter,
  resetBusinessFilters,
} = businessFilterSlice.actions;

export default businessFilterSlice.reducer;
