import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RiderDisplay from "./RiderTable/RiderDisplay";
import { useDispatch, useSelector } from "react-redux";
import { fetchRiders, riderChatData } from "../../actions/RiderActions";

const RiderData = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const rider = useSelector((state) => state.riderData.riders);
  const pageNo = page.toString();

  useEffect(() => {
    if (page) {
      dispatch(fetchRiders(pageNo));
    }
  }, [page]);

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
  const handleclick = (id, phone, name1) => {
    const pageNo = page.toString();
    const data = {
      pageNo,
      name1,
      Id: id,
      phone,
    };

    dispatch(riderChatData(data));

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
