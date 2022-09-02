import { combineReducers } from "redux";
import { riderData, riderChatData, riderMessages } from "./RiderReducers";

let allReducers = combineReducers({
  riderData: riderData,
  riderChatData: riderChatData,
  riderMessages: riderMessages,
});

export default allReducers;
