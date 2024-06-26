import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';
import { RatingFilterEnum } from '@/app/types/enums/RatingFilterEnum';
import { BusinessFilterType } from '@/app/types/filter/EntityFilterType';
import {
  BusinessSortByEnum,
  BusinessSortType,
  SortDirectionEnum,
} from '@/app/types/SortType';

const initialState: BusinessFilterType = {
  rating: RatingFilterEnum.ALL,
  category: [CategoryFilterEnum.ALL],
  search: '',
  sort: {
    sortBy: BusinessSortByEnum.UpdatedDate,
    sortDirection: SortDirectionEnum.Descending,
  },
};

const businessFilterSlice = createSlice({
  name: 'businessFilter',
  initialState,
  reducers: {
    setBusinessRatingFilter(state, action: PayloadAction<number>) {
      if (action.payload === RatingFilterEnum.ALL) {
        state.rating = RatingFilterEnum.ALL;
        return;
      }

      if (state.rating === RatingFilterEnum.ALL) {
        state.rating = RatingFilterEnum.ALL;
      }

      state.rating = action.payload;
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

        if (state.category.length === 0) {
          state.category.push(CategoryFilterEnum.ALL);
        }
      }
    },
    setBusinessSearchFilter(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setBusinessSortFilter(state, action: PayloadAction<BusinessSortType>) {
      state.sort = action.payload;
    },
    removeBusinessRatingFilter(state, action: PayloadAction<number>) {
      if (action.payload === RatingFilterEnum.ALL) {
        return;
      }

      state.rating = RatingFilterEnum.ALL;
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
    removeBusinessSearchFilter(state) {
      state.search = '';
    },
    removeBusinessSortFilter(state) {
      state.sort = {
        sortBy: BusinessSortByEnum.UpdatedDate,
        sortDirection: SortDirectionEnum.Ascending,
      };
    },
    resetBusinessFilters(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setBusinessRatingFilter,
  setBusinessesCategoryFilter,
  setBusinessSearchFilter,
  setBusinessSortFilter,
  removeBusinessSearchFilter,
  removeBusinessSortFilter,
  removeBusinessRatingFilter,
  removeBusinessCategoryFilter,
  resetBusinessFilters,
} = businessFilterSlice.actions;

export default businessFilterSlice.reducer;
