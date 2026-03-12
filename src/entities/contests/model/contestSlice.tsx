import { createSlice } from '@reduxjs/toolkit';

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
};
export interface CurrContest {
  id: string
  name: string
  description: string
  status: string
  type: string
  startDate: string
  endDate: string
  registrationStart: string
  registrationEnd: string
  maxParticipants: number
  maxTeams: number
  minTeamSize: number
  maxTeamSize: number
  createdAt: string
  updatedAt: string    
}

export interface ContestSlice {
  events: Contest[],
  event: Contest,
  currentEvent: CurrContest,
}

const initialState: ContestSlice = {
  events: [],
  event: {
    id: '',
    title: '',
    month: '',
    day: 0,
    location: '',
  },
  currentEvent: {
    id: '',
    name: '',
    description: '',
    status: '',
    type: '',
    startDate: '',
    endDate: '',
    registrationStart: '',
    registrationEnd: '',
    maxParticipants: 0,
    maxTeams: 0,
    minTeamSize: 0,
    maxTeamSize: 0,
    createdAt: '',
    updatedAt: ''
  }
}

const contestSlice = createSlice({
  name: 'contest',
  initialState,
  reducers: {
    setContests(state, action) {
      state.events = action.payload.contests;
    },
    setEvent(state, action) {
      state.event = action.payload.contest;
    },
  },
})

export const { setContests, setEvent } = contestSlice.actions;
export default contestSlice.reducer;