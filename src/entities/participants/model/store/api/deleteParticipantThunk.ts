import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContestId } from "../../types/participantsApi.types";
import { UserId } from "@/entities/user/model/types/user.types";
import { getParticipantsThunk } from "./getParticipantsThunk";

interface DeleteParticipantArgs {
  contestId: ContestId;
  userId: UserId;
}

export const deleteParticipantThunk = createAsyncThunk<
  void,
  DeleteParticipantArgs
>(
  "participants/deleteParticipant",
  async ({ contestId, userId }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `/api/v1/contests/${contestId}/participants/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(
          errorData instanceof Error
            ? errorData.message
            : `Error: ${response.status}`,
        );
      }

      dispatch(
        getParticipantsThunk({ contestId, pageToken: null, pageSize: 10 }),
      );
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
    }
  },
);
