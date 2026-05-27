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
  async (_, thunkAPI) => {
    try {
      const result = await getUserTransactions();
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Не вдалося отримати транзакції',
      );
    }
  },
);
