import axios, { isAxiosError } from 'axios';
import { ILoginResult, IVerifyResult, LoginModel, RegisterModel } from './models';
import { tokenKeyName } from './defaults';

export const login = async (model: LoginModel): Promise<ILoginResult | null> => {
  try {
    const response = await axios.post('/login', model);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status && error.response?.status >= 400 && error.response?.status <= 499)
      return null;
    else throw error;
  }
};

export const register = async (model: RegisterModel): Promise<boolean> => {
  try {
    const response = await axios.post('/register', model);
    return response?.status === 201;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status && error.response?.status >= 400 && error.response?.status <= 499)
      return false;
    else throw error;
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
    if (isAxiosError(error) && error.response?.status && error.response?.status >= 400 && error.response?.status <= 499)
      return { isValid: false, user: null };
    else throw error;
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
