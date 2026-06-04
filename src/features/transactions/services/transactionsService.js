import { api } from '@/api/api.js';

export const createTransaction = async transactionData => {
  const response = await api.post('/api/transactions', transactionData);
  return response.data;
};

export const getUserTransactions = async ({ page, limit }) => {
  const response = await api.get(
    `/api/transactions?page=${page}&limit=${limit}`,
  );
  return response.data;
};
