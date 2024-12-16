import axios from 'axios';
import { error } from 'console';

axios.defaults.baseURL = 'https://users-store.onrender.com/api';

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<string> => {
  const response = await axios.post('/login', credentials);
  return response.data.token;
};

export const register = async (data: RegisterData): Promise<string> => {
  const response = await axios.post('/register', data);
  return response.data.message;
};

export const addAuthHeader = (token: string): void => {
  localStorage.setItem('token', token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
