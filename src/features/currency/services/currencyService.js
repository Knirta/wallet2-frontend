import { api } from '@/api/api.js';

export const getExchangeRate = async () => {
  const response = await api.get('/api/currency');
  return response.data;
};
