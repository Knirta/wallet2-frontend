import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations.js';

const initialState = {
  user: { username: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
