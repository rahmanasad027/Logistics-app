import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";

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
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/chat" element={<Chat />} />
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
