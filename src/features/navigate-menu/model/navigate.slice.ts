import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ENavigationKey } from '@/ui/layout/nav/types';

export interface NavState {
  isSidebarOpen: boolean;
  activeKey?: ENavigationKey;
  openGroups: ENavigationKey[];
}

const initialState: NavState = {
  isSidebarOpen: true,
  activeKey: undefined,
  openGroups: [],
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen(state, action: PayloadAction<boolean>) {
      state.isSidebarOpen = action.payload;
    },
    setActiveKey(state, action: PayloadAction<ENavigationKey | undefined>) {
      state.activeKey = action.payload;
    },
    toggleGroup(state, action: PayloadAction<ENavigationKey>) {
      const key = action.payload;

      const isOpen = state.openGroups.includes(key);

      if (isOpen) {
        state.openGroups = state.openGroups.filter((k) => k !== key);
      } else {
        state.openGroups.push(key);
      }
    },
    setOpenGroups(state, action: PayloadAction<ENavigationKey[]>) {
      state.openGroups = action.payload;
    },
    resetNavigation(state) {
      state.activeKey = undefined;
      state.openGroups = [];
    },
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  setActiveKey,
  toggleGroup,
  setOpenGroups,
  resetNavigation,
} = navSlice.actions;
export default navSlice.reducer;
