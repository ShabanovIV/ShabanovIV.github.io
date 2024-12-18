import axios, { AxiosError, isAxiosError } from 'axios';
import { ErrorTypes, IResult } from './result';

axios.defaults.baseURL = 'https://users-store.onrender.com/api';

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  password: string;
}

export const checkToken = async (token: string | null): Promise<IResult<boolean>> => {
  try {
    const response = await axios.get('/verify-token', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 201) {
      return {
        Error: {
          Type: ErrorTypes.None,
          Message: '',
        },
        Data: true,
      };
    }
    throw new Error(`Сервер вернул неизвестный статус код: ${response.status}`);
  } catch (error: any) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.status === 401) {
        return {
          Error: {
            Type: ErrorTypes.Validate,
            Message: 'Только авторизованные пользователи могут выполнять это действие.',
          },
          Data: false,
        };
      }
      if (axiosError.status === 403) {
        return {
          Error: {
            Type: ErrorTypes.Validate,
            Message: 'Ваши аутентификационные данные устарели. Необходимо повторно выполнить вход.',
          },
          Data: false,
        };
      }
      if (axiosError.status != undefined && axiosError.status >= 400 && axiosError.status <= 500) {
        return {
          Error: {
            Type: ErrorTypes.Validate,
            Message: axiosError.message,
          },
          Data: false,
        };
      }
    }
    console.error(error);
    return {
      Error: {
        Type: ErrorTypes.Server,
        Message: error.message,
      },
      Data: false,
    };
  }
};

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
