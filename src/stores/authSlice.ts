import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProfileResult } from 'src/api/models';

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

export const setProfile = (profile: IProfileResult | null): void => {
  localStorage.setItem(profileKey, profile ? JSON.stringify(profile) : '');
};

export const removeProfile = (): void => {
  localStorage.removeItem(profileKey);
};

export const getProfile = (): IProfileResult | null => {
  const profile = localStorage.getItem(profileKey);
  return profile ? JSON.parse(profile) : null;
};

interface AuthState {
  token: string | null;
  profile: IProfileResult | null;
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
    updProfile: (state, action: PayloadAction<IProfileResult | null>) => {
      setProfile(action.payload);
      state.profile = action.payload;
    },
  },
});

export const { login, logout, updProfile } = authSlice.actions;
export default authSlice.reducer;
