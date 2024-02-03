import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BusinessFilterType } from '@/app/types/filter/EntityFilterType';

const initialState: BusinessFilterType = {
  rating: [],
};

const businessFilterSlice = createSlice({
  name: 'businessFilter',
  initialState,
  reducers: {
    setBusinessRatingFilter(state, action: PayloadAction<number>) {
      const index = state.rating.indexOf(action.payload);
      if (index === -1) {
        state.rating.push(action.payload);
      } else {
        state.rating.splice(index, 1);
      }
    },
  },
});

export const { setBusinessRatingFilter } = businessFilterSlice.actions;

export default businessFilterSlice.reducer;
