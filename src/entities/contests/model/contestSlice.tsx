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
  contests: Contest[],
  event: Contest,
}

const initialState: ContestSlice = {
  contests: [],
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
      state.contests = action.payload.contests;
    },
    setEvent(state, action) {
      state.event = action.payload.contest;
    },
  },
})

export const { setContests, setEvent } = contestSlice.actions;
export default contestSlice.reducer;