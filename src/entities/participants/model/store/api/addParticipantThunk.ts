import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddParticipantResponse, ContestId } from "../../types/participantsApi.types";
import { TeamId } from "@/entities/teams/model/types/teams.types";

interface AddParticipantArgs {
  contestId: ContestId;
  teamId: TeamId;
}

export const addParticipantThunk = createAsyncThunk<AddParticipantResponse, AddParticipantArgs>(
  "participants/addParticipant",
  async ({ contestId, teamId }, { rejectWithValue}) => {
    try {
      const response = await fetch(
        `/api/v1/contests/${contestId}/participants`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teamId }),
        },
      );
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData instanceof Error ? errorData.message : `Error: ${response.status}`);
      }
      return await response.json();
    } catch (error: unknown) {
      return rejectWithValue(error instanceof Error ? error.message : "An unknown error occurred");
    }
  },
);
