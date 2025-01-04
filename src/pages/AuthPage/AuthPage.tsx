import React, { useState } from 'react';
import SignInForm from '../../forms/SignInForm/SignInForm';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import styles from './AuthPage.module.scss';
import { login, register } from '../../api/auth';
import { ILoginResult } from 'src/api/models';

interface AuthPageProps {
  onAuthFail: () => void;
  onAuthSuccess: (result: ILoginResult) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthFail, onAuthSuccess }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = async (credentials: { userName: string; password: string }) => {
    const result = await login({
      username: credentials.userName,
      password: credentials.password,
    });
    if (result) {
      onAuthSuccess(result);
    } else {
      onAuthFail();
    }
  };

  const handleSignUp = async (data: { userName: string; password: string; confirmPassword: string }) => {
    if (data.password !== data.confirmPassword) {
      throw new Error('Не обработано сравнение паролей.');
    }
    const success = await register({
      username: data.userName,
      password: data.password,
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
