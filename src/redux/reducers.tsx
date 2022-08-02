import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from '../menu/menuSlice';
import { authApi } from '../core/services/auth';
import auth from '../pages/auth/authSlice';

const rootReducer = combineReducers({
  menu:menuReducer,
  [authApi.reducerPath]: authApi.reducer,
  auth
});

export default rootReducer;