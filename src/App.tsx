import React from "react";
import "./App.css";
import ErrorBoundaries from "../src/ErrorBoundaries/ErrorBoundaries";
import Routing from "./Routes/Routing";
// import Login from "./Components/Login/Login";
// import Signup from "./Components/Register/Signup";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Lazyloader from "./LazyLoading/Lazyloader";
// import Home from "./Components/Home/Home";
//import Modals from "./Components/Modal/Modals";
//import ErrorBoundaries from "./ErrorBoundaries/ErrorBoundaries";
// const Signup = Lazyloader(() => import("./Components/Register/Signup"),<h1>loading..</h1>);
// const Login = Lazyloader(() => import("./Components/Login/Login"),<h1>loading..</h1>);
// const Home = Lazyloader(() => import("./Components/Home/Home"),<h1>loading..</h1>);
// const Modals= Lazyloader(() => import("./Components/Modal/Modals"),<h1>loading..</h1>);

function App() {
  return (
    <div className="App">
      <ErrorBoundaries>
          {Routing}
      </ErrorBoundaries>
     
    </div>
  );
}

export default App;
