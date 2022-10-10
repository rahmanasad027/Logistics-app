import { useMutation } from "react-query";
import axios from "axios";

const postData = (state) => {
  const url = `${process.env.REACT_APP_BASE_URL}/login`;
  return axios.post(url, state);
  // return fetch(url, { method: "POST" }, state);
};
export const useRiderPostData = () => {
  return useMutation(postData);
};

// export const loginUser = axios
//   .post(`${process.env.REACT_APP_BASE_URL}/login`, state)
//   .then((res) => res.data);
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
