import { createSlice } from '@reduxjs/toolkit';
import { Award, Briefcase, LucideIcon, Trophy, Zap } from 'lucide-react';

export interface StatItem {
  id: string;
  label: string;
  value: number | string;
  icon: LucideIcon;
  color: string;
  bg: string;
  key: string;
}

export interface StatsState {
  stats: StatItem[];
}

const initialState: StatsState = {
  stats: [
    {
      id: '1',
      key: 'active_hackathons',
      label: 'Активные хакатоны',
      value: 2,
      icon: Trophy,
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
    },
    {
      id: '2',
      key: 'my_projects',
      label: 'Мои проекты',
      value: 12,
      icon: Briefcase,
      color: 'text-sky-400',
      bg: 'bg-sky-400/10',
    },
    {
      id: '3',
      key: 'total_participations',
      label: 'Всего участий',
      value: 28,
      icon: Zap,
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10',
    },
    {
      id: '4',
      key: 'wins',
      label: 'Победы',
      value: 5,
      icon: Award,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
    },
  ],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
});

export const {} = statsSlice.actions;
export default statsSlice.reducer;
