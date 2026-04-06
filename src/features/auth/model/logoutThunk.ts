import { createAsyncThunk } from '@reduxjs/toolkit';

import { logout } from '@/features/auth/model/auth.slice';

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    try {
      localStorage.removeItem('access_token');
      dispatch(logout());
    } catch (error) {
      console.error('Logout error:', error);
    }
  },
);
