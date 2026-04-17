import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, current, refresh } from './operations.js';

// user: {
//   name: '',
//   email: '',
//   totalBalance: 0,
//   currency: 'UAH',
//   avatarUrl: '',
// }
const initialState = {
  user: null,
  token: null,
  isAuthLoading: true,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase('persist/REHYDRATE', (state, action) => {
        if (!action.payload?.token) {
          state.isAuthLoading = false;
        }
      })
      .addCase(register.pending, state => {
        state.isAuthLoading = true;
      })
      .addCase(register.fulfilled, state => {
        state.isAuthLoading = false;
        state.token = null;
      })
      .addCase(register.rejected, state => {
        state.isAuthLoading = false;
      })
      .addCase(login.pending, state => {
        state.isAuthLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthLoading = false;
      })
      .addCase(login.rejected, state => {
        state.isAuthLoading = false;
      })
      .addCase(logout.pending, state => {
        state.isAuthLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isAuthLoading = false;
      })
      .addCase(logout.rejected, state => {
        state.isAuthLoading = false;
      })
      .addCase(current.pending, state => {
        state.isAuthLoading = true;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthLoading = false;
      })
      .addCase(current.rejected, state => {
        state.isAuthLoading = false;
      })
      .addCase(refresh.pending, state => (state.isAuthLoading = true))
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthLoading = false;
      })
      .addCase(refresh.rejected, state => {
        state.isAuthLoading = false;
        state.user = null;
        state.token = null;
      });
  },
});

export default slice.reducer;
