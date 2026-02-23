import { createAsyncThunk } from '@reduxjs/toolkit'
import { setEvent } from './contestSlice';

interface GetContestResponse {
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
};

export const getContestByIdThunk = createAsyncThunk<
  GetContestResponse,
  string,
  { rejectValue: string }>('contests/getById', async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`/api/v1/contests/${id}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch contest');
      }

      const data: GetContestResponse = await response.json();

      dispatch(setEvent(data));
      return data;

    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  }
);
