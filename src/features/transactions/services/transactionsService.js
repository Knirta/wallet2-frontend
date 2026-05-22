import { api } from '@/api/api.js';

export const createTransaction = async transactionData => {
  const response = await api.post('/api/transactions', transactionData);
  return response.data;
};
