import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from '../menu/menuSlice';

const rootReducer = combineReducers({
  menu:menuReducer,
});

export default rootReducer;