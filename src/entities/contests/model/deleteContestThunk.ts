import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteContestThunk = createAsyncThunk<
  string, // возвращаем id удаленного
  string, // принимаем id
  { rejectValue: string }
>('contests/delete', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/v1/contests/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete contest');
    }

    return id;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});
