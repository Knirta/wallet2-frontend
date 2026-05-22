import { createAsyncThunk } from '@reduxjs/toolkit';
import { createTransaction } from '@/features/transactions/services/transactionsService.js';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transactionData, thunkAPI) => {
    try {
      const result = await createTransaction(transactionData);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Не вдалося додати транзакцію',
      );
    }
  },
);
