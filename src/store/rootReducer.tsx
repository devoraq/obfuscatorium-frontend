import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "@/features/auth/model/authSlice";
import navSlice from "@/features/navigate-menu/model/navigateSlice"

export const rootReducer = combineReducers({
  auth: authSlice,
  nav: navSlice,
});