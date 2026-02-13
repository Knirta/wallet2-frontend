import { api } from '@/services/api.js'; // Імпортуємо глобальний клієнт

//example of auth api service
export const loginRequest = async credentials => {
  const { data } = await api.post('/auth/login', credentials);
  return data;
};
