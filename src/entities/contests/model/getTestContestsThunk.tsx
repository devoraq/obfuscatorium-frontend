import { createAsyncThunk } from '@reduxjs/toolkit';
import { setContests } from './contestSlice';
import { mockContestsResponse } from './mockContests';
import {Contest} from './contestSlice'

export const getContestsThunk = createAsyncThunk<
  { contests: Contest[]; nextPageToken: string },
  void,
  { rejectValue: string }
>('contests/getAll', async (_, { dispatch, rejectWithValue }) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    dispatch(setContests(mockContestsResponse));
    return mockContestsResponse;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
}); 