import React, { useState, useEffect } from "react";
import Messages from "./ChatBox/Messages";
import InputBox from "./ChatBox/InputBox";
import { useDispatch } from "react-redux";
import { fetchRider } from "../../actions/RiderActions";
import { useParams } from "react-router-dom";

const RiderChat = () => {
  const [togle, setTogle] = useState(false);
  const dispatch = useDispatch();
  const { Id, pageNo } = useParams();

  useEffect(() => {
    if (Id && pageNo) {
      dispatch(fetchRider(Id, pageNo));
    }
  }, [togle]);
  console.log("toggle: ", togle);

  const handleClick = async (rider) => {
    if (rider) {
      const url = `${process.env.REACT_APP_BASE_URL}/rider_alerts/`;
      await fetch(url, {
        method: "POST",
        headers: window.h,
        body: JSON.stringify(rider),
      })
        .then((data) => {
          if (data.ok) {
            console.log("success", data);
          } else {
            console.log("failure");
          }
        })
        .catch((e) => console.log("error occurs", e));
    }
    setTogle(!togle);
  };

  return (
    <div>
      <Messages />
      <InputBox handleClick={handleClick} />
    </div>
  );
};

export default RiderChat;
