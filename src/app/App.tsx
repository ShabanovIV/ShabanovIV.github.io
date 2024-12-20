import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthPage from '../pages/AuthPage/AuthPage';
import styles from './App.module.scss';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { getToken, removeToken, setToken, verifyToken } from '../api/auth';
import { TextButton } from '../components/ui/TextButton/TextButton';

axios.defaults.baseURL = 'https://users-store.onrender.com/api';

const App: React.FC = () => {
  const [user, setUser] = useState<{ id: number; username: string } | null>(null);

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

  const onAuthSuccess = (user: { id: number; username: string }) => {
    setUser(user);
  };

  return (
    <div className={styles.App}>
      <HeaderMenu />
      {!user ? (
        <AuthPage setToken={setToken} onAuthSuccess={onAuthSuccess} />
      ) : (
        <div className={styles.content}>
          <p>Добро пожаловать, {user.username}!</p>
          <TextButton
            text={'Выйти'}
            maxTextLength={Infinity}
            borderVisible={true}
            borderRounded={true}
            handleClick={() => {
              removeToken();
              setUser(null);
            }}
          ></TextButton>
        </div>
      )}
    </div>
  );
};

export default App;
