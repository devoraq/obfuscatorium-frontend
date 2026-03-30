import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ContestId,
  ListParticipantsResponse,
} from "../../types/participantsApi.types";

interface GetParticipantsArgs {
  contestId: ContestId;
  pageToken: string | null;
  pageSize?: number;
}

export const getParticipantsThunk = createAsyncThunk<
  ListParticipantsResponse,
  GetParticipantsArgs
>(
  "participants/listParticipants",
  async ({ contestId, pageToken, pageSize = 20 }, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams();
      if (pageToken) queryParams.append("pageToken", pageToken);
      queryParams.append("pageSize", pageSize.toString());

      const response = await fetch(
        `/api/v1/contests/${contestId}/participants?${queryParams.toString()}`,
      );
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(
          errorData instanceof Error
            ? errorData.message
            : `Error: ${response.status}`,
        );
      }
      return await response.json();
    } catch (error: unknown) {
      return rejectWithValue(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
    }
  },
);
