import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const currentPathKey = 'currentPath';

export const getCurrentPath = () => {
  return localStorage.getItem(currentPathKey) || '/welcome';
};

interface AppState {
  initialized: boolean;
  currentPath: string;
}

const initialState: AppState = {
  initialized: false,
  currentPath: getCurrentPath(),
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitialized(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
    setCurrentPath(state, action: PayloadAction<string>) {
      state.currentPath = action.payload;
      localStorage.setItem(currentPathKey, action.payload);
    },
  },
});

export const { setInitialized, setCurrentPath } = appSlice.actions;
export default appSlice.reducer;
