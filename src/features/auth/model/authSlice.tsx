import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  id: string
  username: string
  email: string
  avatar: string
  bio: string
  role: string
  createdAt: string
}

export interface AuthState {
  accessToken: string
  tokenType: string
  expiresIn: number
  user: User | null
  isAuth: boolean
  isError: boolean
  errorMessage: string
}

const initialState: AuthState = {
  accessToken: '',
  tokenType: '',
  expiresIn: 0,
  user: null,
  isAuth: false,
  isError: false,
  errorMessage: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{accessToken: string, tokenType: string, expiresIn: number, user: User}>) {
      state.isAuth = true;
      state.isError = false;
      state.errorMessage = '';

      state.accessToken = action.payload.accessToken;
      state.tokenType = action.payload.tokenType;
      state.expiresIn = action.payload.expiresIn;
      state.user = action.payload.user;
    },

    loginFailure(state, action: PayloadAction<string>) {
      state.isAuth = false;
      state.isError = true;

      state.errorMessage = action.payload;
      state.accessToken = '';
      state.tokenType = '';
      state.expiresIn = 0;
      state.user = null;
    },

    logout(state) {
      state.isAuth = false;
      state.accessToken = '';
      state.tokenType = '';
      state.expiresIn = 0;
      state.user = null;
      state.isError = false;
      state.errorMessage = '';
    },

    updateUser(state, action: PayloadAction<Partial<User>>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
  },
})

// --- Экспорт действий ---
export const { loginSuccess, loginFailure, logout, updateUser } = authSlice.actions;

// --- Экспорт редьюсера ---
export default authSlice.reducer;