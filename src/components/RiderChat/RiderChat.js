import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Messages from "./ChatBox/Messages";
import InputBox from "./ChatBox/InputBox";

const RiderChat = () => {
  const [message, setMessage] = useState({});
  const [togle, setTogle] = useState(false);
  const location = useLocation();
  const parameters = location.state;
  // const h = new Headers();
  // h.append("Content-Type", "application/json");
  // h.append("Authorization", "token 692afd3e4b33ee5eba6daaab786907798189d7da");

  useEffect(() => {
    getRider();
  }, [togle]);

  const getRider = () => {
    const url =
      `${process.env.REACT_APP_BASE_URL}/rider/rider_alerts?rider=` +
      parameters.Id +
      "&page=" +
      parameters.pageNo +
      "&";
    fetch(url, {
      method: "GET",
      headers: window.h,
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data);
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
            console.log("success");
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
      {message ? (
        <Messages params={parameters.name1} message={message} />
      ) : null}

      <InputBox params={parameters.phone} handleClick={handleClick} />
    </div>
  );
};

export default RiderChat;
