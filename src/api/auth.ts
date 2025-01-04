import axios from 'axios';
import { ILoginResult, IVerifyResult, LoginModel, RegisterModel } from './models';
import { tokenKeyName } from './defaults';

export const login = async (model: LoginModel): Promise<ILoginResult | null> => {
  try {
    const response = await axios.post('/login', model);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const register = async (model: RegisterModel): Promise<boolean> => {
  try {
    const response = await axios.post('/register', model);
    return response?.status === 201;
  } catch (error) {
    return false;
  }
};

export const verifyToken = async (token: string | null): Promise<IVerifyResult> => {
  if (!token) {
    return { isValid: false, user: null };
  }
  try {
    const response = await axios.get<IVerifyResult>('/verify-token', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return {
      isValid: response.status === 200,
      user: response.data?.user,
    };
  } catch (error) {
    return { isValid: false, user: null };
  }
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
