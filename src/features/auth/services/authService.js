import { api } from '@/api/api.js';

export const registerUser = async credentials => {
  const { data } = await api.post('/api/auth/register', credentials);
  return data;
};

export const verifyEmail = async verificationCode => {
  const { data } = await api.post('/api/auth/verify-email', {
    verificationCode,
  });
  return data;
};

export const reVerifyEmail = async email => {
  const { data } = await api.post('/api/auth/resend-verification', { email });
  return data;
};

export const loginUser = async credentials => {
  const { data } = await api.post('/api/auth/login', credentials);
  return data;
};
