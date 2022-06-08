import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./State /Store/Store";
import axios from "axios";
import Token from "./TokenService/Token";
import { string } from "yup";
axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((request: any) => {
  console.log("intercetor =-=-=-=-request-=-=-=-=-=-=request", request);
  const token = Token.getAccessToken();
  console.log(Token, "request------------------------ token");
  request.headers = {
    "x-access-token": token,
    "Content-Type": "application/json",
  };
  return request;
});

//interceptor response
axios.interceptors.response.use((res) => {
  console.log("intterceptors=-= response-=-=", res);
  return res;
},

async (err:any)=>{
  console.log("axios----error---------",err)
  if (err.response.status === 401) {
    console.log("401 unauthorized");
    if (
      err.response.data.message === "Unauthorized! Access Token was expired!"
    ){
      try{
        let refresh = Token.getRefreshToken();
        console.log(refresh,"1 hour refresh token")
        const res =await axios.post(`${process.env.REACT_APP_SERVER_URL}/refresh`,
        {
          "x-access-token": refresh,
          "Content-Type": "application/json",

        });
      }
      catch{

      }
    }
     
  }
}
);



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
