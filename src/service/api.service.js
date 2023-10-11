import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'https://fakestoreapi.com';

export const API = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  timeout: 15000,
});

API.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.setAuthorization(`Bearer ${token}`);
  }
  return config;
});
