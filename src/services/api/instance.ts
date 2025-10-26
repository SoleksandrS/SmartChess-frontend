import { envs } from '../../config';
import axios from 'axios';
import { STORAGE_KEYS } from 'constants/localStorage';

export const instance = axios.create({
  baseURL: envs.apiUrl,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)}`;
  return request;
});
