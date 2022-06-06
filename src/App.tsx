import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Register/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Modals from "./Components/Modal/Modals";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/modals/:id" element={<Modals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
