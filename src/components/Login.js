import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
// import Dashboard from "./Dashboard";

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [token,setToken] = useState('')
    // console.log(token,'token in login component')
const navigate = useNavigate()

   async function handleButtonSubmit () {
        const state = {email,password}
        const url = 'https://do-rider.cheetay.pk/login'
      const result = await  fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            // body: state
            body: JSON.stringify(state)
        }).then(res => res.json()).then(data => {
            setToken(data.token)
            // console.log(data,'this is data from login post')
        })
// navigate('/dashboard')
    }


return(
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
          <button type="submit" className="btn btn-primary" onClick={handleButtonSubmit}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        {/* <Dashboard token={token} /> */}
      </>
)
}

export default Login;