import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async () => {
    const response = await fetch('/api/transactions');
    return response.data;
  },
);
