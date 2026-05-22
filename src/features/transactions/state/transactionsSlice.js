import { createSlice } from '@reduxjs/toolkit';
import { addTransaction } from './operations.js';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.items.push(action.payload.transaction);
        state.isLoading = false;
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default slice.reducer;
