import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ENavigationKey } from "@/ui/components/sidebar/types";
import { RootState } from "@/store/store";

interface SidebarState {
  isOpen: boolean;
  manuallyOpenedGroups: ENavigationKey[];
}

const initialState: SidebarState = {
  isOpen: true,
  manuallyOpenedGroups: [],
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    toggleGroup: (state, action: PayloadAction<ENavigationKey>) => {
      const key = action.payload;
      if (state.manuallyOpenedGroups.includes(key)) {
        state.manuallyOpenedGroups = state.manuallyOpenedGroups.filter(
          (k) => k !== key,
        );
      } else {
        state.manuallyOpenedGroups.push(key);
      }
    },
    setManuallyOpenedGroups: (
      state,
      action: PayloadAction<ENavigationKey[]>,
    ) => {
      state.manuallyOpenedGroups = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  toggleGroup,
  setManuallyOpenedGroups,
} = sidebarSlice.actions;

export const selectIsSidebarOpen = (state: RootState) => state.sidebar.isOpen;
export const selectManuallyOpenedGroups = (state: RootState) =>  state.sidebar.manuallyOpenedGroups;

export default sidebarSlice.reducer;
