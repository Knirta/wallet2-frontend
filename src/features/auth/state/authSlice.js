import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations.js';

const initialState = {
  user: { username: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default slice.reducer;
