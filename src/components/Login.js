import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchToken } from "../actions/RiderActions";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userToken.token);
  useEffect(() => {
    if (token) {
      console.log("token", token);
      window.h = new Headers();
      window.h.append("Content-Type", "application/json");
      window.h.append("Authorization", `token ${token}`);
    }
  }, [token]);

  async function handleButtonSubmit() {
    const state = { email, password };
    if (state) {
      dispatch(fetchToken(state));
    }
    if (token) {
      navigate("/riderData");
    }
  }

  return (
    <>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleButtonSubmit}
        >
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a>password?</a>
      </p>
    </>
  );
};

export default Login;
