import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { ENavigationKey } from "@/ui/components/sidebar/types";
import { NAVIGATION_ITEMS } from "@/ui/components/navigation/constants";
import { RootState } from "@/store/store";
import { selectManuallyOpenedGroups } from "@/store/slices/sidebarSlice";

interface NavigationState {
  activeKey?: ENavigationKey;
}

const initialState: NavigationState = {
  activeKey: undefined,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setActiveKey: (
      state,
      action: PayloadAction<ENavigationKey | undefined>,
    ) => {
      state.activeKey = action.payload;
    },
  },
});

export const { setActiveKey } = navigationSlice.actions;

export const selectActiveKey = (state: RootState) => state.navigation.activeKey;

export const selectOpenGroups = createSelector(
  [selectActiveKey, selectManuallyOpenedGroups],
  (activeKey, manuallyOpenedGroups) => {
    const parentOfActive = NAVIGATION_ITEMS.find((item) =>
      item.subItems?.some((sub) => sub.key === activeKey),
    );

    const groups = new Set(manuallyOpenedGroups);
    if (parentOfActive) {
      groups.add(parentOfActive.key);
    }

    return Array.from(groups);
  },
);

export default navigationSlice.reducer;
