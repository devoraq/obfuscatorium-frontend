import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "@/store/slices/sidebarSlice";
import navigationReducer from "@/store/slices/navigationSlice";

const appReducer = (state = { initialized: true, loading: false }) => state;

export const rootReducer = combineReducers({
  app: appReducer,
  sidebar: sidebarReducer,
  navigation: navigationReducer,
});
