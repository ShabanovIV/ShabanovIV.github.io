import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const tokenKey = 'token';

export const setToken = (token: string | null): void => {
  localStorage.setItem(tokenKey, token ?? '');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeToken = (): void => {
  localStorage.removeItem(tokenKey);
};

export const getToken = (): string | null => {
  const token = localStorage.getItem(tokenKey);
  return token || null;
};

interface AuthState {
  token: string | null;
  profile: { id: number; username: string } | null;
}

const initialState: AuthState = {
  token: getToken(), // Получаем токен из localStorage
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      setToken(action.payload.token); // Сохраняем токен в localStorage
      state.token = action.payload.token;
      state.profile = action.payload.profile && {
        username: action.payload.profile.username,
        id: action.payload.profile.id,
      };
    },
    logout: (state) => {
      removeToken(); // Удаляем токен из localStorage
      state.token = null;
      state.profile = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
