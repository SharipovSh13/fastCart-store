import axios from "axios";
import { getToken } from "../lib/utils/token";

export const axiosApiURL = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

// ✅ Добавляем интерцептор, чтобы в каждый запрос добавлялся токен
axiosApiURL.interceptors.request.use(
  (config) => {
    const token = getToken(); // например, localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
