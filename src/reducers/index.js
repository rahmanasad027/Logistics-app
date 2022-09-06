import { combineReducers } from "redux";
import {
  riderData,
  riderChatData,
  riderMessages,
  userToken,
} from "./RiderReducers";

let allReducers = combineReducers({
  riderData: riderData,
  riderChatData: riderChatData,
  riderMessages: riderMessages,
  userToken: userToken,
});

export default allReducers;
