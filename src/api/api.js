import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wallet-api-nitl.onrender.com/',
});
// Тут додаємо токени до всіх запитів
