import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from '../services/categoriesService.js';

export const getAllCategories = createAsyncThunk(
  'categories/getAllCategories',
  async (_, thunkAPI) => {
    try {
      const result = await getAll();
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Не вдалося отримати категорії',
      );
    }
  },
);
