import { createAsyncThunk } from '@reduxjs/toolkit';

import { setContests } from './contest.slice';

interface Contest {
  id: string;
  name: string;
  description: string;
  status: string;
  type: string;
  startDate: string;
  endDate: string;
  registrationStart: string;
  registrationEnd: string;
  maxParticipants: number;
  maxTeams: number;
  minTeamSize: number;
  maxTeamSize: number;
  createdAt: string;
  updatedAt: string;
}

interface GetContestsResponse {
  contests: Contest[];
  nextPageToken: string;
}

export const getContestsThunk = createAsyncThunk<
  GetContestsResponse,
  void,
  { rejectValue: string }
>('contests/getAll', async (_, { dispatch, rejectWithValue }) => {
  try {
    const response = await fetch('/api/v1/contests');

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch contests');
    }

    const data: GetContestsResponse = await response.json();

    dispatch(setContests(data));

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});
