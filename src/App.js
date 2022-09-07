import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RiderData from "./components/allRiders/RiderData";
import RiderChat from "./components/RiderChat/RiderChat";
import Protected from "./components/Protected";
import "bootstrap/dist/css/bootstrap.min.css";
// final commit
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <Link to="/">Login</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <Link to="/RiderData">Rider Data</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="App">
          <div className="container">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/RiderData" element={<Protected />}>
                    <Route exact path="/RiderData" element={<RiderData />} />
                  </Route>
                  <Route
                    path="/riderChat/:Id/:pageNo"
                    element={<RiderChat />}
                  />
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
