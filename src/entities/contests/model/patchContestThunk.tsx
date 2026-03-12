import { createAsyncThunk } from '@reduxjs/toolkit';

interface PatchContestResponse {
    contest: {
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
};

export interface Contest {
  id: string
  data: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    registrationStart: string;
    registrationEnd: string;
    maxParticipants: number;
    maxTeams: number;
    minTeamSize: number;
    maxTeamSize: number;
    updateMask: string;    
  }
}

export const updateContestThunk = createAsyncThunk<
  PatchContestResponse,               // сервер вернет обновленный объект
  Contest,      // передаем id + поля
  { rejectValue: string }>('contests/update', async ({ id, ...payload }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/v1/contests/${id}`, {
        method: 'PATCH',                  
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload.data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to update contest')
      }

      const data: PatchContestResponse = await response.json()

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  }
)
