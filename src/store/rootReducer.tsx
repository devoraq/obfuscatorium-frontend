import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "@/features/auth/model/authSlice";
import navSlice from "@/features/navigate-menu/model/navigateSlice";
import contestSlice from "@/entities/contests/model/contestSlice";
import teamsSlice from "@/entities/teams/model/teamsSlice";
import statsSlice from "@/entities/stats/model/statsSlice";
import participantsSlice from "@/entities/participants/model/store/participantsSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  nav: navSlice,
  contest: contestSlice,
  participants: participantsSlice,
  teams: teamsSlice,
  stats: statsSlice,
});