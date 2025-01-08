import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getToken, removeProfile, removeToken, setProfile, setToken } from 'src/api/common/localStorageHelper';
import { IProfileResult } from 'src/api/profile/models/IProfileResult';
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
