import axios from 'axios';
import { ILoginResult, IVerifyResult, LoginModel, RegisterModel } from './models';

export const login = async (model: LoginModel): Promise<ILoginResult | null> => {
  try {
    const response = await axios.post('/signin', model);
    return response.data;
  } catch (error) {
    return null; // Ошибка записана в useError
  }
};

export const register = async (model: RegisterModel): Promise<boolean> => {
  try {
    const response = await axios.post('/signup', model);
    return response?.status === 201;
  } catch (error) {
    return false; // Ошибка записана в useError
  }
};

// В учебном API нет реализации проверки токена, поэтому проверяем только наличие токена
export const verifyToken = async (
  token: string | null,
  profile: {
    _id: string;
    email: string;
    signUpDate: string;
  } | null
): Promise<IVerifyResult> => {
  return { isValid: !!token, profile: profile };
  // if (!token) {
  //   return { isValid: false, user: null };
  // }
  // try {
  //   const response = await axios.get<IVerifyResult>('/verify-token', {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   return {
  //     isValid: response.status === 200,
  //     user: response.data?.user,
  //   };
  // } catch (error) {
  //   return { isValid: false, user: null }; // Ошибка записана в useError
  // }
};
