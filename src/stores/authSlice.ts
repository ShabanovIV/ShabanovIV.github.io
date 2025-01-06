import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const tokenKey = 'token';
const profileKey = 'profile';

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

export const setProfile = (
  profile: {
    _id: string;
    email: string;
    signUpDate: string;
  } | null
): void => {
  localStorage.setItem(profileKey, profile ? JSON.stringify(profile) : '');
};

export const removeProfile = (): void => {
  localStorage.removeItem(profileKey);
};

export const getProfile = (): {
  _id: string;
  email: string;
  signUpDate: string;
} | null => {
  const profile = localStorage.getItem(profileKey);
  return profile ? JSON.parse(profile) : null;
};

interface AuthState {
  token: string | null;
  profile: {
    _id: string;
    email: string;
    signUpDate: string;
  } | null;
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
      setProfile(action.payload.profile);
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    },
    logout: (state) => {
      removeToken(); // Удаляем токен из localStorage
      removeProfile();
      state.token = null;
      state.profile = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
