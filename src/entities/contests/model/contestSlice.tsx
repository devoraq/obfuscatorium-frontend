import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getParticipantsThunk } from "./getParticipantsThunk";

export interface Contest {
  id: string;
  title: string;
  month: string;
  day: number;
  location: string;
  prize?: string;
  status?: "upcoming" | "ongoing" | "finished";
  participantsCount?: number;
  isParticipating?: boolean;
  description?: string;
}
export interface CurrContest {
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

export interface Participant {
  userId: string;
  userName?: string;
  teamId?: string;
}

export interface ContestSlice {
  events: Contest[];
  event: Contest;
  currentEvent: CurrContest;
  participants: Participant[];
  nextPageToken: string | null;
  isLoadingParticipants: boolean;
  participantsError: string | null;
}

const initialState: ContestSlice = {
  events: [],
  event: {
    id: "",
    title: "",
    month: "",
    day: 0,
    location: "",
  },
  currentEvent: {
    id: "",
    name: "",
    description: "",
    status: "",
    type: "",
    startDate: "",
    endDate: "",
    registrationStart: "",
    registrationEnd: "",
    maxParticipants: 0,
    maxTeams: 0,
    minTeamSize: 0,
    maxTeamSize: 0,
    createdAt: "",
    updatedAt: "",
  },
  participants: [],
  nextPageToken: null,
  isLoadingParticipants: false,
  participantsError: null,
};

const contestSlice = createSlice({
  name: "contest",
  initialState,
  reducers: {
    setContests(state, action: PayloadAction<{ contests: Contest[] }>) {
      state.events = action.payload.contests;
    },
    setEvent(state, action: PayloadAction<{ contest: Contest }>) {
      state.event = action.payload.contest;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getParticipantsThunk.pending, (state) => {
        state.isLoadingParticipants = true;
        state.participantsError = null;
      })
      .addCase(getParticipantsThunk.fulfilled, (state, action) => {
        state.isLoadingParticipants = false;
        state.participants = action.payload.participants;
        state.nextPageToken = action.payload.nextPageToken;
      })
      .addCase(getParticipantsThunk.rejected, (state, action) => {
        state.isLoadingParticipants = false;
        state.participantsError = action.payload as string;
      });
  },
});

export const { setContests, setEvent } = contestSlice.actions;
export default contestSlice.reducer;
