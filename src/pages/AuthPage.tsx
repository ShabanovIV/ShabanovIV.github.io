import React, { useState } from 'react';
import axios from 'axios';
import SignInForm from '../forms/SignInForm/SignInForm';
import SignUpForm from '../forms/SignUpForm/SignUpForm';
import styles from './AuthPage.module.scss';

interface AuthPageProps {
  onAuthSuccess: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  // Обработчики событий для форм
  const handleSignIn = async (credentials: { userName: string; password: string }) => {
    try {
      const response = await axios.post('/login', {
        username: credentials.userName,
        password: credentials.password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      onAuthSuccess();
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      alert('Ошибка авторизации. Проверьте имя пользователя и пароль.');
    }
  };

  const handleSignUp = async (data: { userName: string; password: string; confirmPassword: string }) => {
    if (data.password !== data.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    try {
      const response = await axios.post('/register', {
        username: data.userName,
        password: data.password,
      });
      if (response.status === 201) {
        alert(response.data.message || 'Вы успешно зарегистрировались! Теперь вы можете войти.');
        setIsSignUp(false);
      } else {
        alert('Регистрация прошла, но возникли проблемы.');
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      alert('Ошибка регистрации. Пользователь с таким именем уже существует.');
    }
  };

  return (
    <div className={styles.container}>
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
