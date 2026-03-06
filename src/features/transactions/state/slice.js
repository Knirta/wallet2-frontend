import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
});

export default slice.reducer;
