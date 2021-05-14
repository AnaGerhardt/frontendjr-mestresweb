import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";

const allReducers = {
  auth: authReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
