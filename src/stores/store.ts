import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import authReducer from './authSlice';
import { profileApi } from '../api/profile/profileApi';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    [profileApi.reducerPath]: profileApi.reducer, // Добавляем редьюсер profileApi
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(profileApi.middleware), // Добавляем миддлвар для RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
