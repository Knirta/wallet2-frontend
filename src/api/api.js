import axios from 'axios';
import { store } from '@/app/store.js';
import { isPublicRoute } from './config.js';
import { refresh } from '@/features/auth/state/operations.js';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  withCredentials: true,
});

api.interceptors.request.use(config => {
  const token = store.getState().auth.token;

  if (token && !isPublicRoute(config.url)) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isPublicRoute(originalRequest.url)
    ) {
      originalRequest._retry = true;

      try {
        const { data: result } = await store.dispatch(refresh()).unwrap();

        if (originalRequest.url.includes('/current')) {
          return Promise.resolve({ data: result.data });
        }

        originalRequest.headers.Authorization = `Bearer ${result.data.token}`;
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
