import axios from 'axios';
import { ILoginResult, IVerifyResult, ILoginBody, IRegisterBody } from './authModels';
import { IProfileResult } from './profile/models/IProfileResult';

export const login = async (model: ILoginBody): Promise<ILoginResult | null> => {
  try {
    const tokenRes = await axios.post('/signin', model);
    const token = tokenRes?.data?.token;
    const profileRes = await axios.get('/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = profileRes?.data;
    return { token, profile };
  } catch (error) {
    return null; // Ошибка записана в useError
  }
};

export const register = async (model: IRegisterBody): Promise<boolean> => {
  try {
    const response = await axios.post('/signup', model);
    return response?.status === 201;
  } catch (error) {
    return false; // Ошибка записана в useError
  }
};

// В учебном API нет реализации проверки токена, поэтому проверяем только наличие токена
export const verifyToken = async (token: string | null, profile: IProfileResult | null): Promise<IVerifyResult> => {
  return { isValid: !!token, profile: profile };
};
