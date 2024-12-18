import axios, { AxiosError, isAxiosError } from 'axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import styles from './ErrorBox.module.scss';
import { ContentModal } from '../ContentModal/ContentModal';

export const ErrorTypes = {
  None: 'none',
  Validate: 'validate',
  Server: 'server',
} as const;

export type ErrorType = (typeof ErrorTypes)[keyof typeof ErrorTypes];

interface ErrorContextProps {
  Type: ErrorType;
  Message: string;
  Data: any;
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

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => {
        if (response.status < 400) {
          setErrorType(ErrorTypes.None);
        }
        return response;
      },
      (error) => {
        if (isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError?.status && axiosError.status >= 400 && axiosError.status <= 499) {
            setErrorType(ErrorTypes.Validate);
            setMessage(axiosError.message);
            setStatus(axiosError.status);
            setData(axiosError.response?.data);
          } else if (axiosError?.status && axiosError?.status >= 500 && axiosError?.status <= 599) {
            setErrorType(ErrorTypes.Server);
            setMessage(axiosError.message);
            setStatus(axiosError.status);
            console.error(axiosError);
          }
        } else {
          setErrorType(ErrorTypes.Server);
          setMessage(error?.message ?? 'Неизвестная ошибка.');
          console.error(error);
        }

        return Promise.reject(error);
      }
    );
  }, []);

  function onClose(): void {
    setErrorType(ErrorTypes.None);
  }

  return (
    <ErrorContext.Provider value={{ Type: errorType, Message: message, Data: data }}>
      {errorType === ErrorTypes.Validate && data === null && (
        <ContentModal visible={errorType === ErrorTypes.Validate && data === null} handleClose={onClose}>
          {message}
        </ContentModal>
      )}
      {(errorType === ErrorTypes.Validate || errorType === ErrorTypes.None) && data != null && children}
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
    throw new Error('useError должен использоваться внутри ErrorBox');
  }
  return context;
};
