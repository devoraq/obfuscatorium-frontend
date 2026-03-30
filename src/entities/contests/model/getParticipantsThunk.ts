import { createAsyncThunk } from "@reduxjs/toolkit";

// Описываем типы на основе Swagger
interface GetParticipantsArgs {
  contestId: string;
  pageToken?: string;
  pageSize?: number;
}

export const getParticipantsThunk = createAsyncThunk(
  "contests/listParticipants",
  async (
    { contestId, pageToken, pageSize = 20 }: GetParticipantsArgs,
    { rejectWithValue },
  ) => {
    try {
      const query = new URLSearchParams();
      if (pageToken) query.append("pageToken", pageToken);
      query.append("pageSize", pageSize.toString());

      const response = await fetch(
        `/api/v1/contests/${contestId}/participants${query.toString()}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(
          errorData.message || `Ошибка: ${response.status}`,
        );
      }

      return await response.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  },
);
