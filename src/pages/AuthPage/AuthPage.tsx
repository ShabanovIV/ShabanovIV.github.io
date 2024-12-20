import React, { useState } from 'react';
import SignInForm from '../../forms/SignInForm/SignInForm';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import styles from './AuthPage.module.scss';
import { login, register } from '../../api/auth';

interface AuthPageProps {
  setToken: (token: string) => void;
  onAuthSuccess: (user: { id: number; username: string }) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ setToken, onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignIn = async (credentials: { userName: string; password: string }) => {
    const loginResult = await login({
      username: credentials.userName,
      password: credentials.password,
    });
    setToken(loginResult.token);
    onAuthSuccess(loginResult.user);
  };

  const handleSignUp = async (data: { userName: string; password: string; confirmPassword: string }) => {
    if (data.password !== data.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    const message = await register({
      username: data.userName,
      password: data.password,
    });
    alert(message);
    setIsSignUp(false);
  };

  return (
    <div className={styles.authPageWrapper}>
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
    </div>
  );
};

export default AuthPage;
