import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Messages from "./ChatBox/Messages";
import InputBox from "./ChatBox/InputBox";
import { useDispatch } from "react-redux";
import { fetchRider } from "../../actions/RiderActions";
import { useParams } from "react-router-dom";

const RiderChat = () => {
  // const [message, setMessage] = useState({});
  const [togle, setTogle] = useState(false);
  const dispatch = useDispatch();
  const { Id, pageNo } = useParams();
  // console.log("parameters", params);
  // const location = useLocation();
  // const parameters = location.state;

  useEffect(() => {
    if (Id && pageNo) {
      dispatch(fetchRider(Id, pageNo));
    }
  }, [togle]);
  console.log("toggle: ", togle);
  // const fetchData = async () => {
  //   const url =
  //     `${process.env.REACT_APP_BASE_URL}/rider/rider_alerts?rider=` +
  //     Id +
  //     "&page=" +
  //     pageNo +
  //     "&";
  //   const response = await fetch(url, {
  //     method: "GET",
  //     headers: window.h,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch(riderMessages(data.data.alerts));
  //       console.log("new array is: ", data.data.alerts[0]);
  //     });
  // };

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
          // console.log("the data", data);
        })
        .catch((e) => console.log("error occurs", e));
    }
    setTogle(!togle);
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
