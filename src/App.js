import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RiderData from "./components/allRiders/RiderData";
import RiderChat from "./components/RiderChat/RiderChat";

window.h = new Headers();
window.h.append("Content-Type", "application/json");
window.h.append(
  "Authorization",
  "token 692afd3e4b33ee5eba6daaab786907798189d7da"
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  {/* <Route exact path='/' element={<Login  />} /> */}
                  <Route path="/RiderData" element={<RiderData />} />
                  <Route path="/riderChat" element={<RiderChat />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
