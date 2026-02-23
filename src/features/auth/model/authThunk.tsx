import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginSuccess, logout, loginFailure } from '@/features/auth/model/authSlice'

interface LoginPayload {
  username: string
  password: string
}

interface LoginResponse {
  accessToken: string
  tokenType: string
  expiresIn: number
  user: {
    id: string
    username: string
    email: string
    avatar: string
    bio: string
    role: string
    createdAt: string
  }
}

export const loginThunk = createAsyncThunk<
  LoginResponse, // возвращаемый тип
  LoginPayload,  // payload для thunk
  { rejectValue: string }>('auth/login', async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Login failed')
      }

      const data: LoginResponse = await response.json()

      localStorage.setItem('access_token', data.accessToken)

      dispatch(
        loginSuccess({
          accessToken: data.accessToken,
          tokenType: data.tokenType,
          expiresIn: data.expiresIn,
          user: data.user,
        })
      )

      return data;
    } catch (error: unknown) {
      dispatch(logout())
      if (error instanceof Error) {
        dispatch(loginFailure(error.message))
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Unknown error')
    }
  }
)