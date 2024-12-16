import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthPage from '../pages/AuthPage/AuthPage';
import styles from './App.module.scss';
import { useLang } from 'src/components/LangProvider/LangProvider';
import HeaderMenu from 'src/components/HeaderMenu/HeaderMenu';

axios.defaults.baseURL = 'https://users-store.onrender.com/api';

// Глобальный перехватчик ответов для обработки 401
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.reload(); // Перезагружаем страницу, чтобы перенаправить на форму авторизации
    }
    return Promise.reject(error);
  }
);

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null, пока не проверим токен
  const { getTranslate } = useLang();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsAuthenticated(true); // Токен есть, авторизован
    } else {
      setIsAuthenticated(false); // Токена нет
    }
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true); // Успешная авторизация
  };

  if (isAuthenticated === null) {
    // Пока идет проверка токена
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (!isAuthenticated) {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <>
      <HeaderMenu />
      {!isAuthenticated ? (
        <AuthPage onAuthSuccess={handleAuthSuccess} />
      ) : (
        <div className={styles.App}>
          <p>{getTranslate('welcome.hello')}</p>
          <p>{getTranslate('welcome.work')}</p>
          <p>{getTranslate('welcome.tasks')}</p>
          <p>Telegram: @ivshaban Email: react.dev.shabanov@mail.ru</p>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              setIsAuthenticated(false);
            }}
          >
            Выйти
          </button>
        </div>
      )}
    </>
  );
};

export default App;
