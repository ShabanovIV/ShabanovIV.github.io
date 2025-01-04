import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import AuthPage from '../pages/AuthPage/AuthPage';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { getToken, removeToken, setToken, verifyToken } from '../api/auth';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PrivateRoute from '../routes/PrivateRoute';
import OperationsPage from '../pages/OperationsPage/OperationsPage';
import { ILoginResult } from '../api/models';
import { ErrorTypes, useError } from '../components/ErrorProvider/ErrorProvider';
import { ErrorPage } from '../pages/ErrorPages/ErrorPage';

axios.defaults.baseURL = 'https://users-store.onrender.com/api';
const currentPathKey = 'currentPath';

const App: React.FC = () => {
  const [user, setUser] = useState<{ id: number; username: string } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { ready, errorData, onRemoveError } = useError();

  // Обработчик успешной авторизации
  const handleAuthSuccess = (result: ILoginResult) => {
    setToken(result.token);
    setUser(result.user);
    navigate('/welcome');
  };

  const handleSignIn = () => {
    if (onRemoveError) {
      onRemoveError();
    }
    navigate('/');
  };

  // Обработчик сброса авторизации
  const handleResetAuth = useCallback(() => {
    removeToken();
    setUser(null);
    if (
      errorData?.type === ErrorTypes.Server ||
      errorData?.type === ErrorTypes.NotFound ||
      errorData?.type === ErrorTypes.AccessDenied
    ) {
      navigate('/error');
    } else {
      navigate('/');
    }
  }, [errorData, navigate]);

  // Если ошибка 403, 404 или 5xx, то переходим на страницу ошибки
  useEffect(() => {
    if (
      errorData?.type === ErrorTypes.Server ||
      errorData?.type === ErrorTypes.NotFound ||
      errorData?.type === ErrorTypes.AccessDenied
    ) {
      navigate('/error');
    }
  }, [errorData, navigate]);

  // Если пользователь авторизован, проверяем токен
  // (после того как axios добавил централизованную обработку ошибок)
  useEffect(() => {
    const checkAuth = async () => {
      if (!ready) return;
      const token = getToken();
      const verifyResult = await verifyToken(token);
      if (verifyResult.isValid) {
        setUser(verifyResult.user);
      } else {
        removeToken();
        setUser(null);
      }
    };
    checkAuth();
  }, [ready]);

  // Сохраняем текущий путь в localStorage
  useEffect(() => {
    localStorage.setItem(currentPathKey, location.pathname);
  }, [location.pathname]);

  // Переходим на последний путь после обновления страницы
  useEffect(() => {
    const savedPath = localStorage.getItem(currentPathKey);
    if (savedPath && savedPath !== location.pathname) {
      navigate(savedPath);
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      {errorData?.type !== ErrorTypes.Server &&
        errorData?.type !== ErrorTypes.AccessDenied &&
        errorData?.type !== ErrorTypes.NotFound && (
          <HeaderMenu isAuthenticated={user != null} handleSignIn={handleSignIn} handleLogout={handleResetAuth} />
        )}
      <Routes>
        {/* Маршрут ошибки 5xx 403 404 */}
        <Route path="/error" element={<ErrorPage />} />
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
