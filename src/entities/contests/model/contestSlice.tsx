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
};

export interface ContestSlice {
  events: Contest[],
  event: Contest,
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