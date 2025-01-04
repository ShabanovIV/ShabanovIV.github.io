import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  profile: { username: string } | null;
  initialized: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  profile: null,
  initialized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
      state.profile = { username: 'Admin' }; // Фейковые данные профиля
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
      state.profile = null;
    },
    initialize: (state) => {
      state.initialized = true;
    },
  },
});

export const { login, logout, initialize } = authSlice.actions;
export default authSlice.reducer;
