import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modals from "../Components/Modal/Modals";
import Lazyloader from "../LazyLoading/Lazyloader";
import PrivateRouting from "../PrivateRouting/PrivateRouting";

const Signup = Lazyloader(
  () => import("../Components/Register/Signup"),
  <h1>loading..</h1>
);
const Login = Lazyloader(
  () => import("../Components/Login/Login"),
  <h1>loading..</h1>
);
const Home = Lazyloader(
  () => import("../Components/Home/Home"),
  <h1>loading..</h1>
);

const Routing = (
  <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRouting>
            <Home />
          </PrivateRouting>
        }
      />
      <Route path="/modals/:id" element={<Modals />} />
    </Routes>
  </Router>
);
export default Routing;
