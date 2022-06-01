import React from "react";
import "./App.css";
//import Login from "./Components/Login/Login";
import Signup from "./Components/Register/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
