import { combineReducers } from "redux";
import config from "./config";
import database from "./database";
const rootReducers = combineReducers({
  config,
  database,
});

export default rootReducers;
