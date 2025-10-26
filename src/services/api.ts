import { envs } from 'config';
import axios from 'axios';
import { STORAGE_KEYS } from 'constants/localStorage';

export const API = {
  AUTH: '/auth',
  USERS: '/users',
  GAMES: '/games'
};

export const api = axios.create({
  baseURL: envs.apiUrl,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)}`;
  return request;
});
