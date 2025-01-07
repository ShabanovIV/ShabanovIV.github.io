import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SignInForm from '../../forms/SignInForm/SignInForm';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import styles from './AuthPage.module.scss';
import { login, register } from '../../api/auth';
import { ILoginResult } from '../../api/models';
import { ErrorTypes, useError } from '../../components/ErrorProvider/ErrorProvider';
import { constants } from '../../api/common/constants';

interface AuthPageProps {
  onAuthFail: () => void;
  onAuthSuccess: (result: ILoginResult) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthFail, onAuthSuccess }) => {
  const { errorData, onRemoveError } = useError();
  const [isSignIn, setIsSignIn] = useState(true);
  const [prevIsSignIn, setPrevIsSignIn] = useState(isSignIn);

  useEffect(() => {
    if (onRemoveError && errorData?.type === ErrorTypes.Validate && prevIsSignIn !== isSignIn) {
      onRemoveError(); // Очищаем ошибку только при смене формы
    }
    setPrevIsSignIn(isSignIn); // Обновляем предыдущее состояние формы
  }, [isSignIn, prevIsSignIn, errorData, onRemoveError]);

  const handleSignIn = async (credentials: { email: string; password: string }) => {
    const result = await login({
      email: credentials.email,
      password: credentials.password,
    });
    if (result) {
      onAuthSuccess(result);
    } else {
      onAuthFail();
    }
  };

  const handleSignUp = async (data: { email: string; password: string; confirmPassword: string }) => {
    if (data.password !== data.confirmPassword) {
      throw new Error('Не обработано сравнение паролей.');
    }
    const success = await register({
      email: data.email,
      password: data.password,
      commandId: constants.commandID,
    });
    setIsSignIn(success);
  };

  return (
    <div className={styles.authPageWrapper}>
      <div className={styles.card}>
        {isSignIn ? (
          <>
            <SignInForm onSignIn={handleSignIn} />
            <p className={styles.switchText}>
              Нет аккаунта?{' '}
              <button className={styles.switchButton} onClick={() => setIsSignIn(false)}>
                Зарегистрироваться
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onSignUp={handleSignUp} />
            <p className={styles.switchText}>
              Уже есть аккаунт?{' '}
              <button className={styles.switchButton} onClick={() => setIsSignIn(true)}>
                Войти
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
