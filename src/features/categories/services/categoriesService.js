import { api } from '@/api/api.js';

export const getAll = async () => {
  const response = await api.get('/api/categories');
  return response.data;
};
