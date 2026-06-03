import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const startContestThunk = createAsyncThunk<
  Contest, // сервер вернет созданный contest
  string, // что отправляем
  { rejectValue: string }
>('contests/start', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/v1/contests/${id}:start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to start contest');
    }

    const data: Contest = await response.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});
