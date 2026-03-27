import { createSlice } from '@reduxjs/toolkit';
import { Trophy, Briefcase, Zap, Award, LucideIcon } from "lucide-react";

export interface StatItem {
  id: string;
  label: string;
  value: number | string;
  iconName: string; 
  key: string;
}

export const STATS_ICON_MAP: Record<string, LucideIcon> = {
  trophy: Trophy,
  briefcase: Briefcase,
  zap: Zap,
  award: Award,
};

export type StatsIconName = keyof typeof STATS_ICON_MAP;

export const STATS_STYLES: Record<string, { color: string; bg: string }> = {
  trophy: { color: "text-amber-400", bg: "bg-amber-400/10" },
  briefcase: { color: "text-sky-400", bg: "bg-sky-400/10" },
  zap: { color: "text-indigo-400", bg: "bg-indigo-400/10" },
  award: { color: "text-emerald-400", bg: "bg-emerald-400/10" },
};

export interface StatsState {
    stats: StatItem[];
};


const initialState: StatsState = {
    stats: [
        {
            id: "1",
            key: "active_hackathons",
            label: "Активные хакатоны",
            value: 2,
           iconName: "trophy",
        },
        {
            id: "2",
            key: "my_projects",
            label: "Мои проекты",
            value: 12,
            iconName: "briefcase", 
            
        },
        {
            id: "3",
            key: "total_participations",
            label: "Всего участий",
            value: 28,
           iconName: "zap",
        },
        {
            id: "4",
            key: "wins",
            label: "Победы",
            value: 5,
           iconName: "award",
        },
    ],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {

  },
});

export const {  } = statsSlice.actions;
export default statsSlice.reducer;