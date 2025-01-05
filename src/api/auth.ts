import axios from 'axios';
import { ILoginResult, IVerifyResult, LoginModel, RegisterModel } from './models';

export const login = async (model: LoginModel): Promise<ILoginResult | null> => {
  try {
    const response = await axios.post('/login', model);
    return response.data;
  } catch (error) {
    return null; // Ошибка записана в useError
  }
};

export const register = async (model: RegisterModel): Promise<boolean> => {
  try {
    const response = await axios.post('/register', model);
    return response?.status === 201;
  } catch (error) {
    return false; // Ошибка записана в useError
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
    return { isValid: false, user: null }; // Ошибка записана в useError
  }
};
