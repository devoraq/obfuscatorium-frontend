import { createAsyncThunk } from '@reduxjs/toolkit';
import { setEvent } from './contestSlice';

interface Contest {
  name: string,
  description: string,
  type: string,
  startDate: string,
  endDate: string,
  registrationStart: string,
  registrationEnd: string,
  maxParticipants: number,
  maxTeams: number,
  minTeamSize: number,
  maxTeamSize: number
}

interface PostContestsResponse {
  contest: {
    id: string
    name: string
    description: string
    status: string
    type: string
    startDate: string
    endDate: string
    registrationStart: string
    registrationEnd: string
    maxParticipants: number
    maxTeams: number
    minTeamSize: number
    maxTeamSize: number
    createdAt: string
    updatedAt: string
  }
}

export const createContestThunk = createAsyncThunk<
  PostContestsResponse,                 // сервер вернет созданный contest
  Contest,        // что отправляем
  { rejectValue: string }>('contests/create', async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch('/api/v1/contests', {
        method: 'POST',                 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),     
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create contest');
      }

      const data: PostContestsResponse = await response.json();

      dispatch(setEvent(data));

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  }
)