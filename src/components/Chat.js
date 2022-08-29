import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Input from "./Input";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

const Chat = () => {
  // const [data, setData] = useState({
  //   name: "",
  //   page: "",
  //   Id: "",
  //   phone: "",
  // });
  const [message, setMessage] = useState({});
  let location = useLocation();
  const params = location.state;
  // useEffect(() => {
  //   setData({
  //     name: location.state.name1,
  //     page: location.state.pageNo,
  //     Id: location.state.Id,
  //     phone: location.state.phone,
  //   });
  // }, []);
  // console.log("data", data);
  console.log("location statre", location.state);
  useEffect(() => {
    const url =
      "https://do-rider.cheetay.pk/rider/rider_alerts?rider=" +
      params.Id +
      "&page=" +
      params.pageNo +
      "&";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token 692afd3e4b33ee5eba6daaab786907798189d7da",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data);
      });
  }, []);
  console.log("message data is:", message);
  return (
    <>
      {message ? (
        <div>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" className="header-message">
                Chat
              </Typography>
            </Grid>
          </Grid>
          <Grid container component={Paper}>
            <Grid item xs={3}>
              <List>
                <ListItem button key="RemySharp">
                  <ListItemIcon>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                  </ListItemIcon>
                  <ListItemText primary={params.name1}></ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Grid>
            <Grid item xs={9}>
              <div style={{ height: "450px", overflowY: "scroll" }}>
                {message.data?.alerts?.map((message) => {
                  return (
                    <div>
                      <List key={message.id}>
                        <ListItem>
                          <Grid container>
                            <Grid item xs={12}>
                              <ListItemText
                                align="right"
                                primary={message.description}
                              ></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                              <ListItemText
                                align="right"
                                secondary="09:30"
                              ></ListItemText>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </List>
                    </div>
                  );
                })}
              </div>
              <Divider />
              {params.phone ? <Input phone1={params.phone} /> : null}
            </Grid>
          </Grid>
        </div>
      ) : null}
    </>
  );
};
export default Chat;
