import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from '../routes/PrivateRoute';
import { verifyToken } from '../api/auth';
import { ILoginResult } from '../api/models';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { ErrorType, ErrorTypes, useError } from '../components/ErrorProvider/ErrorProvider';
import AuthPage from '../pages/AuthPage/AuthPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import OperationsPage from '../pages/OperationsPage/OperationsPage';
import { ErrorPage } from '../pages/ErrorPages/ErrorPage';
import { getCurrentPath, setCurrentPath, setInitialized } from '../stores/appSlice';
import { getProfile, getToken, login, logout } from '../stores/authSlice';
import { useAppDispatch, useAppSelector } from '../stores/hooks';

axios.defaults.baseURL = 'http://19429ba06ff2.vps.myjino.ru/api';

const isErrorPage = (errorType: ErrorType | undefined) => {
  return errorType === ErrorTypes.Server || errorType === ErrorTypes.AccessDenied || errorType === ErrorTypes.NotFound;
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ready: axiosReady, errorData, onRemoveError } = useError();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const app = useAppSelector((state) => state.app);

  // Определяем app.Initialized флаг
  useEffect(() => {
    dispatch(setInitialized(axiosReady));
  }, [axiosReady, dispatch]);

  // Сохраняем текущий путь, кроме страницы ошибки (в localStorage и в store)
  useEffect(() => {
    if (app.currentPath !== location.pathname && location.pathname !== '/error') {
      dispatch(setCurrentPath(location.pathname));

      // Если страница сменилась, не на /error, то удаляем ошибку
      if (onRemoveError && errorData?.type === ErrorTypes.Validate) {
        onRemoveError();
      }
    }
  }, [location.pathname, app.currentPath, errorData?.type, dispatch, onRemoveError]);

  // Переходим на текущий путь
  useEffect(() => {
    navigate(getCurrentPath());
  }, [navigate]);

  // Если ошибка 403, 404 или 5xx, то переходим на страницу ошибки
  useEffect(() => {
    if (isErrorPage(errorData?.type)) {
      navigate('/error');
    }
  }, [errorData, navigate]);

  // Если пользователь авторизован, проверяем токен
  // (после того как axios добавил централизованную обработку ошибок)
  useEffect(() => {
    const checkAuth = async () => {
      if (!app.initialized) return;
      const token = getToken(); // Получаем токен из localStorage (чтобы не добавлять в зависимости useEffect auth.token)
      const profile = getProfile(); // Получаем профиль из localStorage (чтобы не добавлять в зависимости useEffect auth.token)
      const verifyResult = await verifyToken(token, profile);
      if (verifyResult.isValid) {
        dispatch(login({ token: token, profile: verifyResult.profile }));
      } else {
        dispatch(logout());
      }
    };
    checkAuth();
  }, [app.initialized, dispatch]);

  return (
    <div>
      {!isErrorPage(errorData?.type) && (
        <HeaderMenu
          isAuthenticated={auth.profile != null}
          handleSignIn={() => {
            navigate('/');
          }}
          handleLogout={() => {
            dispatch(logout());
          }}
        />
      )}
      <Routes>
        {/* Маршрут ошибки 5xx 403 404 */}
        <Route path="/error" element={<ErrorPage />} />
        {/* Маршрут авторизации */}
        <Route
          path="/"
          element={
            <AuthPage
              onAuthFail={() => {
                dispatch(logout());
                navigate('/');
              }}
              onAuthSuccess={(result: ILoginResult) => {
                dispatch(login({ token: result.token, profile: result.profile }));
                navigate('/welcome');
              }}
            />
          }
        />
        {/* Защищенный маршрут для приветствия */}
        <Route
          path="/welcome"
          element={
            <PrivateRoute isAuthenticated={auth.profile != null}>
              <div>Добро пожаловать, {auth.profile?.email}!</div>
            </PrivateRoute>
          }
        />
        {/* Защищенный маршрут для ProfilePage */}
        <Route
          path="/profile"
          element={
            <PrivateRoute isAuthenticated={auth.profile != null}>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/operations"
          element={
            <PrivateRoute isAuthenticated={auth.profile != null}>
              <OperationsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
