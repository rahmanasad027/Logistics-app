import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Messages from "./ChatBox/Messages";
import InputBox from "./ChatBox/InputBox";
import { useSelector, useDispatch } from "react-redux";
import { riderMessages } from "../../actions/RiderActions";

const RiderChat = () => {
  // const [message, setMessage] = useState({});
  const [togle, setTogle] = useState(false);
  const params = useSelector((state) => state.riderChatData.data);
  const dispatch = useDispatch();
  // console.log("parameters", params);
  // const location = useLocation();
  // const parameters = location.state;

  useEffect(() => {
    fetchData();
  }, [togle]);
  console.log("toggle: ", togle);
  const fetchData = async () => {
    const url =
      `${process.env.REACT_APP_BASE_URL}/rider/rider_alerts?rider=` +
      params.Id +
      "&page=" +
      params.pageNo +
      "&";
    const response = await fetch(url, {
      method: "GET",
      headers: window.h,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(riderMessages(data.data.alerts));
      });
  };

  const handleClick = (rider) => {
    if (rider) {
      const url = `${process.env.REACT_APP_BASE_URL}/rider_alerts/`;
      fetch(url, {
        method: "POST",
        headers: window.h,
        body: JSON.stringify(rider),
      })
        .then((data) => {
          if (data.ok) {
            console.log("success", data);
            setTogle(!togle);
          } else {
            console.log("failure");
          }
          // console.log("the data", data);
        })
        .catch((e) => console.log("error occurs", e));
    }
  };
  // console.log("this is :", togle);

  return (
    <div>
      {/* {message ? ( */}
      <Messages />
      {/* ) : null}  */}

      <InputBox handleClick={handleClick} />
    </div>
  );
};

export default RiderChat;
