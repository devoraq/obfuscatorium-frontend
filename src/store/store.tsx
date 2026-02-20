import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '@/store/slices/sidebarSlice';
import navigationReducer from '@/store/slices/navigationSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;