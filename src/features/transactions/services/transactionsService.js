import { api } from '@/api/api.js';

export const createTransaction = async transactionData => {
  const response = await api.post('/api/transactions', transactionData);
  return response.data;
};

export const getUserTransactions = async () => {
  const response = await api.get('/api/transactions');
  return response.data;
};
