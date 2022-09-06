import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RiderDisplay from "./RiderTable/RiderDisplay";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRiders,
  riderChatData,
  riderData,
} from "../../actions/RiderActions";

const RiderData = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const rider = useSelector((state) => state.riderData.riders);
  const pageNo = page.toString();
  // const token = useSelector((state) => state.userToken.token);
  useEffect(() => {
    if (page) {
      dispatch(fetchRiders(pageNo));
    }
  }, [page]);
  // console.log("this is rider", rider);
  //  generinc functions. URL search param.
  // const fetchData = async () => {
  //   const pageNo = page.toString();
  //   const url = `${process.env.REACT_APP_BASE_URL}/alerts_rider?page=` + pageNo;
  //   const response = await fetch(url, {
  //     method: "GET",
  //     headers: window.h,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // debugger;
  //       dispatch(riderData(data.results));
  //       // debugger;
  //       // console.log(rider,'this is rider data')
  //     });
  // };
  // const getData = () => {
  //   const pageNo = page.toString();
  //   const url = `${process.env.REACT_APP_BASE_URL}/alerts_rider?page=` + pageNo;
  //   fetch(url, {
  //     method: "GET",
  //     headers: window.h,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "this is data from get api");

  //       setRider(data);

  //       // console.log(rider,'this is rider data')
  //     });
  // };
  const handlePage = (e) => {
    if (e.target.value === "next") {
      setPage(page + 1);
    } else if (e.target.value === "prev") {
      if (page === 1) {
        alert("You are already on page 1");
        return page;
      } else {
        setPage(page - 1);
      }
    }
  };
  //  this is something new
  const handleclick = (id, phone, name1) => {
    const pageNo = page.toString();
    const data = {
      pageNo,
      name1,
      Id: id,
      phone,
    };
    // debugger;
    // console.log(data, "this is data");
    // debugger;
    // console.log("this is phone", phone);
    // const Id = id;
    // const state = { pageNo, name1, id, phone };
    // console.log("this is my state:", state);
    // debugger;
    dispatch(riderChatData(data));
    // debugger;
    if (dispatch(riderChatData(data))) {
      navigate(`/riderChat/${data.Id}/${data.pageNo}`);
    }
  };

  return (
    <div>
      <>
        <h1>dashboard</h1>
        {rider ? (
          <RiderDisplay
            rider={rider}
            handleClick={handleclick}
            handlePage={handlePage}
          />
        ) : null}
      </>
      <h4>{page}</h4>
    </div>
  );
};

export default RiderData;
