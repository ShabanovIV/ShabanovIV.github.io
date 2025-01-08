import axios from 'axios';
import { IProfileResult } from '../profile/models/IProfileResult';

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
