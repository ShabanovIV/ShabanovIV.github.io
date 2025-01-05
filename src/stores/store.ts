import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

// Типизация `RootState` и `AppDispatch`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
