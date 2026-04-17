import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  refreshUser,
} from '@/features/auth/services/authService.js';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const result = await registerUser(credentials);
      return result.data;
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
      const result = await loginUser(credentials);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Не вдалося увійти',
      );
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logoutUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || 'Не вдалося вийти',
    );
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  try {
    const result = await getCurrentUser();
    return result.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || 'Користувача не знайдено',
    );
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const result = await refreshUser();
    return result.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || 'Користувача не знайдено',
    );
  }
});
