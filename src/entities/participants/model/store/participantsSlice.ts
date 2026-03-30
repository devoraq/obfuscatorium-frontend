import { createSlice } from "@reduxjs/toolkit";
import { getParticipantsThunk } from "./api/getParticipantsThunk";
import { TeamRegistration } from "@/entities/teams/model/types/teams.types";
import { Participant } from "../types/participiant.types";
import { pendingReducer, rejectedReducer } from "./reducers/helpersReducers";
import { getParticipantsReducer } from "./reducers/getParticipantsReducer";
import { addParticipantThunk } from "./api/addParticipantThunk";
import { addParticipantReducer } from "./reducers/addParticipantReducer";
import { deleteParticipantThunk } from "./api/deleteParticipantThunk";
import { deleteParticepantReducer } from "./reducers/deleteParticipantReducer";

export interface ParticipantsState {
  participants: Participant[];
  teams: TeamRegistration[];
  nextPageToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: ParticipantsState = {
  participants: [],
  teams: [],
  nextPageToken: null,
  loading: false,
  error: null,
};

const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get participants
    builder
      .addCase(getParticipantsThunk.pending, pendingReducer)
      .addCase(getParticipantsThunk.fulfilled, getParticipantsReducer)
      .addCase(getParticipantsThunk.rejected, rejectedReducer);

    // add participant
    builder
      .addCase(addParticipantThunk.pending, pendingReducer)
      .addCase(addParticipantThunk.fulfilled, addParticipantReducer)
      .addCase(addParticipantThunk.rejected, rejectedReducer);

    // delete participant
    builder
      .addCase(deleteParticipantThunk.pending, pendingReducer)
      .addCase(deleteParticipantThunk.fulfilled, deleteParticepantReducer)
      .addCase(deleteParticipantThunk.rejected, rejectedReducer);
  },
});

export default participantsSlice.reducer;
