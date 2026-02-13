import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.example.com',
});
// Тут додаємо токени до всіх запитів
