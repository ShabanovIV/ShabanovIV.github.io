import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import AuthPage from '../pages/AuthPage/AuthPage';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { getToken, removeToken, setToken, verifyToken } from '../api/auth';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PrivateRoute from '../routes/PrivateRoute';
import OperationsPage from '../pages/OperationsPage/OperationsPage';

axios.defaults.baseURL = 'https://users-store.onrender.com/api';
const currentPathKey = 'currentPath';

const App: React.FC = () => {
  const [user, setUser] = useState<{ id: number; username: string } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
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
  }, []);

  useEffect(() => {
    localStorage.setItem(currentPathKey, location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    navigate(localStorage.getItem(currentPathKey) ?? '/');
  }, [navigate]);

  const onAuthSuccess = (user: { id: number; username: string }) => {
    setUser(user);
    navigate('/welcome');
  };

  const onLogout = () => {
    removeToken();
    setUser(null);
    navigate('/');
  };

  const onSignIn = () => {
    navigate('/');
  };

  return (
    <div>
      <HeaderMenu isAuthenticated={user != null} handleSignIn={onSignIn} handleLogout={onLogout} />
      <Routes>
        {/* Маршрут авторизации */}
        <Route path="/" element={<AuthPage setToken={setToken} onAuthSuccess={onAuthSuccess} />} />

        {/* Защищенный маршрут для ProfilePage */}
        <Route
          path="/welcome"
          element={
            <PrivateRoute isAuthenticated={user != null}>
              <div>Добро пожаловать, {user?.username}!</div>
            </PrivateRoute>
          }
        />
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
