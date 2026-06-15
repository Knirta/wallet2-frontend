import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createTransaction,
  getUserTransactions,
} from '@/features/transactions/services/transactionsService.js';

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

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async ({ page, limit, isAppending }, thunkAPI) => {
    try {
      const result = await getUserTransactions({ page, limit });
      return { ...result.data, isAppending };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Не вдалося отримати транзакції',
      );
    }
  },
);
