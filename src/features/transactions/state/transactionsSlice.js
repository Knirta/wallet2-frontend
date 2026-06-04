import { createSlice } from '@reduxjs/toolkit';
import { addTransaction, getTransactions } from './operations.js';

const initialState = {
  items: [],
  currentPage: 1,
  totalPages: 1,
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
        state.items = [action.payload.transaction, ...state.items];
        state.isLoading = false;
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.items = action.payload.transactions;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default slice.reducer;
