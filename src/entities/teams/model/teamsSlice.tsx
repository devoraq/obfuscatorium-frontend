import { createSlice } from '@reduxjs/toolkit';

export interface TeamItem {
  id: string;
  name: string;
  role: string;
  color: string;
  avatar: string;
  email?: string;
  isOnline?: boolean;
}


export interface TeamState {
    participants: TeamItem[];
};


const initialState: TeamState = {
    participants: [],
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {

  },
});

export const {  } = teamsSlice.actions;
export default teamsSlice.reducer;