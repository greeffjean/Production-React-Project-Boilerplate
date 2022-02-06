import { combineReducers } from "redux";
import { TAppState } from "../types/appState";
import { homeReducer } from "./home/reducer";
import { userReducer } from "./user/reducer";


export const rootReducer = combineReducers({
  home: homeReducer,
  user: userReducer
  });