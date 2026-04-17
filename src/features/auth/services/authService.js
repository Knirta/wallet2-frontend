import { api } from '@/api/api.js';
import axios from 'axios';

export const registerUser = async credentials => {
  const response = await api.post('/api/auth/register', credentials);
  return response.data;
};

export const verifyEmail = async verificationCode => {
  const response = await api.post('/api/auth/verify-email', {
    verificationCode,
  });
  return response.data;
};

export const reVerifyEmail = async email => {
  const response = await api.post('/api/auth/resend-verification', { email });
  return response.data;
};

export const loginUser = async credentials => {
  const response = await api.post('/api/auth/login', credentials);
  return response.data;
};

export const logoutUser = async () => {
  await api.post('/api/auth/logout');
};

export const getCurrentUser = async () => {
  const response = await api.get('/api/auth/current');
  return response.data;
};

export const refreshUser = async () => {
  console.log('Виклик refreshUser');
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh`,
    {
      withCredentials: true,
    },
  );

  return response.data;
};
