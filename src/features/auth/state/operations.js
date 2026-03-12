import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
} from '@/features/auth/services/authService.js';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await registerUser(credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Реєстрація не вдалася',
      );
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await loginUser(credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Не вдалося увійти',
      );
    }
  },
);
