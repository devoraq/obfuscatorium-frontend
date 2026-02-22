import { combineReducers } from "@reduxjs/toolkit";

import sidebarReducer from "@/store/slices/sidebarSlice";
import navigationReducer from "@/store/slices/navigationSlice";
import authSlice from "@/features/auth/model/authSlice"

// сюда будут подключаться entity / feature slices
export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  navigation: navigationReducer,
  auth: authSlice,
});