// import { combineReducers } from '@reduxjs/toolkit';

// // сюда будут подключаться entity / feature slices
// export const rootReducer = combineReducers({
//   // user: userReducer,
//   // auth: authReducer,
// });
// @/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

// Создайте временный reducer
const appReducer = (state = { initialized: true, loading: false }) => state;

export const rootReducer = combineReducers({
  app: appReducer, 
});