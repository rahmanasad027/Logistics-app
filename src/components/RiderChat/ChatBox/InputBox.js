import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const InputBox = ({ handleClick }) => {
  const [rider, setRider] = useState({
    title: "",
    description: "",
    riders: [],
    is_active: true,
  });
  const phone = useSelector((state) => state.riderChatData.data.phone);

  useEffect(() => {
    if (phone) {
      setRider({
        title: "",
        description: "",
        riders: [phone],
        is_active: true,
      });
    }
  }, [phone]);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setRider({
        title: e.target.value,
        description: "",
        riders: [...rider.riders],
        is_active: rider.is_active,
      });
    } else if (e.target.name === "description") {
      setRider({
        title: rider.title,
        description: e.target.value,
        riders: [...rider.riders],
        is_active: rider.is_active,
      });
    }
  };
  // console.log("rider data is", rider);

  return (
    <Grid container style={{ padding: "20px" }}>
      <Grid item xs={11}>
        <TextField
          name={"title"}
          id="outlined-basic-email"
          label="title..."
          fullWidth
          onChange={(e) => handleChange(e)}
        />
      </Grid>
      <Grid item xs={11}>
        <TextField
          name={"description"}
          id="outlined-basic-email"
          label="description..."
          fullWidth
          onChange={(e) => handleChange(e)}
        />
      </Grid>
      <Grid xs={1} align="right">
        <Fab color="primary" aria-label="add">
          {rider ? (
            <SendIcon onClick={() => handleClick(rider)} />
          ) : (
            <SendIcon />
          )}
        </Fab>
      </Grid>
    </Grid>
  );
};

export default InputBox;
