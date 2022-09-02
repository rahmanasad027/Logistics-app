import { riderConstants } from "../constants/RiderConstants";

export const riderData = (riders) => {
  return {
    type: riderConstants.RIDER_DATA,
    payload: riders,
  };
};

export const riderChatData = (data) => {
  return {
    type: riderConstants.RIDER_CHAT_DATA,
    payload: data,
  };
};

export const riderMessages = (messages) => {
  return {
    type: riderConstants.RIDER_MESSAGES,
    payload: messages,
  };
};
