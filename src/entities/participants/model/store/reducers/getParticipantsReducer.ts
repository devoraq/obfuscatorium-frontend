import { PayloadAction } from "@reduxjs/toolkit";
import { ParticipantsState } from "../participantsSlice";
import { ListParticipantsResponse } from "../../types/participantsApi.types";

export const getParticipantsReducer = (
  state: ParticipantsState,
  action: PayloadAction<ListParticipantsResponse>,
) => {
  state.loading = false;
  state.error = null;
  state.participants = action.payload.participants ?? state.participants;
  state.teams = action.payload.teams ?? state.teams;
  state.nextPageToken = action.payload.nextPageToken ?? state.nextPageToken;
};
