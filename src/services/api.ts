import { envs } from 'config';
import axios from 'axios';

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
