import { combineReducers } from "redux";
import { boilerPlateReducer } from "./boilerPlate/reducer";
import { homeReducer } from "./home/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  home: homeReducer,
  user: userReducer,
  boilerPlate: boilerPlateReducer
  });