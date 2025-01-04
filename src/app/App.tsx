import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import AuthPage from '../pages/AuthPage/AuthPage';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { getToken, removeToken, setToken, verifyToken } from '../api/auth';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PrivateRoute from '../routes/PrivateRoute';
import OperationsPage from '../pages/OperationsPage/OperationsPage';
import { ILoginResult } from '../api/models';
import { useError } from '../components/ErrorProvider/ErrorProvider';
import { ErrorPage } from '../pages/ErrorPages/ErrorPage';

axios.defaults.baseURL = 'https://users-store.onrender.com/api';
const currentPathKey = 'currentPath';

// Ошибки для отображения на отдельной странице
const Errors = {
  ServerError: { title: 'Опс, что-то пошло не так', message: 'Произошла ошибка на сервере.' },
  NotFound: { title: '404', message: 'Ресурс не найден.' },
  AccessDenied: { title: 'Доступ запрещён', message: 'Недостаточно прав.' },
} as const;

type Error = (typeof Errors)[keyof typeof Errors];

const App: React.FC = () => {
  const [user, setUser] = useState<{ id: number; username: string } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<Error | null>();
  const { ready, errorData } = useError();

  // Устанавливаем ошибку для отображения на отдельной странице
  useEffect(() => {
    console.log('errorData', errorData);
    if (errorData?.type === 'server') setError(Errors.ServerError);
    else if (errorData?.status === 404) setError(Errors.NotFound);
    else if (errorData?.status === 403) setError(Errors.AccessDenied);
    else setError(null);
  }, [errorData]);

  // Если есть ошибка, переходим на страницу ошибки
  useEffect(() => {
    console.log('error', error);
    if (error) navigate('/error');
  }, [error]);

  // Если пользователь авторизован, проверяем токен
  // (после того как axios добавил централизованную обработку ошибок)
  useEffect(() => {
    const checkAuth = async () => {
      console.log('ready', ready);
      if (!ready) return;
      const token = getToken();
      const verifyResult = await verifyToken(token);
      if (verifyResult.isValid) {
        setUser(verifyResult.user);
      } else {
        handleResetAuth();
      }
      console.log('checkAuth', verifyResult);
    };
    checkAuth();
  }, [ready]);

  // Сохраняем текущий путь в localStorage
  useEffect(() => {
    localStorage.setItem(currentPathKey, location.pathname);
    console.log('location.pathname', location.pathname);
  }, [location.pathname]);

  // Переходим на последний путь после обновления страницы
  useEffect(() => {
    const savedPath = localStorage.getItem(currentPathKey);
    if (savedPath && savedPath !== location.pathname) {
      navigate(savedPath);
    }
    console.log('localStorage.getItem(currentPathKey)', localStorage.getItem(currentPathKey));
  }, [navigate]);

  // Обработчик успешной авторизации
  const handleAuthSuccess = (result: ILoginResult) => {
    setToken(result.token);
    setUser(result.user);
    navigate('/welcome');
    console.log('handleAuthSuccess', result);
  };

  // Обработчик сброса авторизации
  const handleResetAuth = () => {
    removeToken();
    setUser(null);
    navigate('/');
    console.log('handleResetAuth');
  };

  return (
    <div>
      <HeaderMenu isAuthenticated={user != null} handleLogout={handleResetAuth} />
      <Routes>
        {/* Маршрут ошибки 5xx 403 404 */}
        <Route
          path="/error"
          element={<ErrorPage titleError={error?.title ?? 'Ошибка'} message={error?.message ?? 'Неизвестная ошибка'} />}
        />
        {/* Маршрут авторизации */}
        <Route path="/" element={<AuthPage onAuthFail={handleResetAuth} onAuthSuccess={handleAuthSuccess} />} />
        {/* Защищенный маршрут для приветствия */}
        <Route
          path="/welcome"
          element={
            <PrivateRoute isAuthenticated={user != null}>
              <div>Добро пожаловать, {user?.username}!</div>
            </PrivateRoute>
          }
        />
        {/* Защищенный маршрут для ProfilePage */}
        <Route
          path="/profile"
          element={
            <PrivateRoute isAuthenticated={user != null}>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/operations"
          element={
            <PrivateRoute isAuthenticated={user != null}>
              <OperationsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
