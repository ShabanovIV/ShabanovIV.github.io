import React, { useState } from 'react';
import { AxiosError, isAxiosError } from 'axios';
import SignInForm from '../../forms/SignInForm/SignInForm';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import styles from './AuthPage.module.scss';
import { addAuthHeader as setAccessToken, login, register } from 'src/api/auth';

interface AuthPageProps {
  onAuthSuccess: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignIn = async (credentials: { userName: string; password: string }) => {
    try {
      const token = await login({
        username: credentials.userName,
        password: credentials.password,
      });
      setAccessToken(token);
      onAuthSuccess();
    } catch (error) {
      if (isAxiosError(error) && (error as AxiosError).status === 401) {
        alert('Неверные имя пользователя или пароль.');
      } else {
        console.error('Ошибка авторизации:', error);
        alert('Ошибка авторизации.');
      }
    }
  };

  const handleSignUp = async (data: { userName: string; password: string; confirmPassword: string }) => {
    if (data.password !== data.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    try {
      const message = await register({
        username: data.userName,
        password: data.password,
      });
      alert(message);
      setIsSignUp(false);
    } catch (error) {
      if (isAxiosError(error) && (error as AxiosError).status === 409) {
        alert('Пользователь с таким именем уже существует.');
      } else {
        console.error('Ошибка регистрации:', error);
        alert('Ошибка регистрации.');
      }
    }
  };

  return (
    <div className={styles.card}>
      {isSignUp ? (
        <>
          <SignUpForm onSignUp={handleSignUp} />
          <p className={styles.switchText}>
            Уже есть аккаунт?{' '}
            <button className={styles.switchButton} onClick={() => setIsSignUp(false)}>
              Войти
            </button>
          </p>
        </>
      ) : (
        <>
          <SignInForm onSignIn={handleSignIn} />
          <p className={styles.switchText}>
            Нет аккаунта?{' '}
            <button className={styles.switchButton} onClick={() => setIsSignUp(true)}>
              Зарегистрироваться
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthPage;
