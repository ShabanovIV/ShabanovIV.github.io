import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthPage from '../pages/AuthPage/AuthPage';
import styles from './App.module.scss';
import { useLang } from 'src/components/LangProvider/LangProvider';
import HeaderMenu from 'src/components/HeaderMenu/HeaderMenu';
import { checkToken } from 'src/api/auth';

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
    var tokenVerify = async () => {
      const token = localStorage.getItem('token');
      const tokenVerifyResult = await checkToken(token);
      if (tokenVerifyResult.Data) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setIsAuthenticated(true); // Токен есть, авторизован
      } else {
        setIsAuthenticated(false); // Токена нет
      }
    };
    tokenVerify();
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
