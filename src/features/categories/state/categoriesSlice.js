import { createSlice } from '@reduxjs/toolkit';
import { getAllCategories } from './operations.js';

const initialState = {
  items: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.items = action.payload.categories;
        state.isLoading = false;
      })
      .addCase(getAllCategories.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default slice.reducer;
