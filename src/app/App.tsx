import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { verifyToken } from '../api/authApi';
import { ErrorType, ErrorTypes, useError } from '../components/ErrorProvider/ErrorProvider';
import { ErrorPage } from '../pages/ErrorPages/ErrorPage';
import { getCurrentPath, setCurrentPath, setInitialized } from '../stores/appSlice';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { ILoginResult } from '../api/authModels';
import { getToken, getProfile } from '../api/common/localStorageHelper';
import { login, logout } from '../stores/authSlice';
import PrivateRoute from '../routes/PrivateRoute';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import AuthPage from '../pages/AuthPage/AuthPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import OperationsPage from '../pages/OperationsPage/OperationsPage';
import CategoriesPage from '../pages/CategoriesPage/CategoriesPage';

axios.defaults.baseURL = 'https://19429ba06ff2.vps.myjino.ru/api';

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
    if (auth.profile && app.initialized && app.currentPath !== location.pathname && location.pathname !== '/error') {
      dispatch(setCurrentPath(location.pathname));

      // Если страница сменилась, не на /error, то удаляем ошибку
      if (onRemoveError && errorData?.type === ErrorTypes.Validate) {
        onRemoveError();
      }
    }
  }, [location.pathname, app.currentPath, errorData?.type, dispatch, onRemoveError, auth.profile, app.initialized]);

  // Переходим на текущий путь
  useEffect(() => {
    const path = getCurrentPath();
    if (auth.profile) navigate(path !== '' && path !== '/' ? path : '/welcome');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.profile]);

  // Если ошибка 403, 404 или 5xx, то переходим на страницу ошибки
  useEffect(() => {
    if (isErrorPage(errorData?.type)) {
      navigate('/error');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorData]);

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
            navigate('/');
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
        <Route
          path="/categories"
          element={
            <PrivateRoute isAuthenticated={auth.profile != null}>
              <CategoriesPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
