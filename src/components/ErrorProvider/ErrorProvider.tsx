import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import axios, { AxiosError, isAxiosError } from 'axios';

import styles from './ErrorProvider.module.scss';
import { ContentModal } from '../ContentModal/ContentModal';

export const ErrorTypes = {
  None: 'none',
  Validate: 'validate',
  Server: 'server',
} as const;

export type ErrorType = (typeof ErrorTypes)[keyof typeof ErrorTypes];

interface ErrorContextProps {
  type: ErrorType;
  status: number | null;
  message: string;
  data?: any;
}

interface ErrorResponse {
  message: string;
}

const ErrorContext = createContext<ErrorContextProps | undefined>(undefined);

export interface IErrorBoxProps {
  children: ReactNode;
}

export const ErrorProvider: React.FC<IErrorBoxProps> = ({ children }) => {
  const [errorType, setErrorType] = useState<ErrorType>(ErrorTypes.None);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<number | null>(null);
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((config) => {
      setIsLoading(true);
      return config;
    });

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        if (response.status < 400) {
          setErrorType(ErrorTypes.None);
          setMessage('');
          setStatus(null);
          setData(null);
          setIsLoading(false);
        }
        return response;
      },
      (error) => {
        if (isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError?.status && axiosError.status >= 400 && axiosError.status <= 499) {
            setErrorType(ErrorTypes.Validate);
            setMessage((axiosError.response?.data as ErrorResponse)?.message ?? axiosError.message);
            setStatus(axiosError.status);
            setData(axiosError.response?.data);
          } else if (axiosError?.status && axiosError?.status >= 500 && axiosError?.status <= 599) {
            setErrorType(ErrorTypes.Server);
            setMessage(axiosError.message);
            setStatus(axiosError.status);
            setData(axiosError.response?.data);
            console.error(axiosError);
          }
        } else {
          setErrorType(ErrorTypes.Server);
          setMessage(error?.message ?? 'Неизвестная ошибка.');
          setStatus(error?.response?.status);
          setData(error?.response?.data);
          console.error(error);
        }

        setIsLoading(false);
        return Promise.resolve(error.response);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  function onClose(): void {
    setErrorType(ErrorTypes.None);
    setMessage('');
    setStatus(null);
    setData(null);
  }

  return (
    <ErrorContext.Provider value={{ type: errorType, status: status, message: message, data: data }}>
      {isLoading && <ContentModal visible={isLoading}>Выполнение запроса...</ContentModal>}
      {errorType === ErrorTypes.Validate && data === null && (
        <ContentModal visible={errorType === ErrorTypes.Validate && data === null} handleClose={onClose}>
          {message}
        </ContentModal>
      )}
      {(errorType === ErrorTypes.Validate || errorType === ErrorTypes.None) && children}
      {errorType === ErrorTypes.Server && (
        <div className={styles.serverError}>
          <h1>{status}</h1>
          <p>Па-па-пам, что-то пошло не так. Мы уже усердно решаем проблему!</p>
        </div>
      )}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError должен использоваться внутри ErrorProvider');
  }
  return context;
};
