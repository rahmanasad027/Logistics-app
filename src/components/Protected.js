import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
let auth = false;
const Protected = () => {
  //   const [auth, setAuth] = useState(true);
  //   const [count, setCount] = useState(0);
  const token = useSelector((state) => state.userToken.token);
  if (token) {
    auth = true;
  }
  //   const handleCounter = () => {
  //     counter++;
  //     console.log("counter: ", counter);
  //   };

  //   const token = useSelector((state) => state.userToken.token);
  //   console.log("token in protected component", token);
  //   console.log("auth:", auth);

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
