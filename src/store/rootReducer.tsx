import { combineReducers } from '@reduxjs/toolkit';

import contestSlice from '@/entities/contests/model/contest.slice';
import statsSlice from '@/entities/stats/model/stats.slice';
import teamsSlice from '@/entities/teams/model/teams.slice';

import authSlice from '@/features/auth/model/auth.slice';
import navSlice from '@/features/navigate-menu/model/navigate.slice';

export const rootReducer = combineReducers({
  auth: authSlice,
  nav: navSlice,
  contest: contestSlice,
  teams: teamsSlice,
  stats: statsSlice,
});
