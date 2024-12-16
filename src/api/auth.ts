import axios from 'axios';
import { ILoginResult, IVerifyResult, LoginModel, RegisterModel } from './models';
import { tokenKeyName } from './defaults';

export const login = async (model: LoginModel): Promise<ILoginResult> => {
  const response = await axios.post('/login', model);
  return response.data;
};

export const register = async (model: RegisterModel): Promise<string> => {
  const response = await axios.post('/register', model);
  return response.data.message;
};

export const verifyToken = async (token: string | null): Promise<IVerifyResult> => {
  if (!token) {
    return {
      isValid: false,
      user: null,
    };
  }
  const response = await axios.get('/verify-token', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    isValid: response.status === 200,
    user: response.data?.user,
  };
};

export const setToken = (token: string): void => {
  localStorage.setItem(tokenKeyName, token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeToken = (): void => {
  localStorage.removeItem(tokenKeyName);
};

export const getToken = (): string | null => {
  return localStorage.getItem(tokenKeyName);
};
