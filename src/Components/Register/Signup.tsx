import React from "react";
import "../Register/Signup.css";
//import Login from "../Login/Login";
//import { useNavigate } from "react-router";
import { Formik, FormikValues } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import * as Yup from "yup";
import { useState } from "react";

// const TextField =(props) =>{
//   return <input {...props}/>
// }

// interface FormValues {
//   username:string;
//   email: string;
//   password: string;
// }

// const initialValues:FormValues={
//   username: "",
//   email: "",
//   password: "",
// }
const Signup = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email("Invalid email format").required(),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required(),
  
  });
  console.log("testschema",schema)
  const[values,setValues]=useState<any>("")

  // const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  //   const {name,value}=event.target;
  //   setValues({...values,[name]:value});
  // }

  // const handleSubmit=(event:React.ChangeEvent<HTMLInputElement>):void=>{
  //   event.preventDefault()
  //   console.log("clicked")
  // }
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={(data) => {
        console.log("clicked 1", data);
        setValues(data)
        localStorage.setItem("Signup", JSON.stringify(data))
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="pb-3">
            <label>Name</label>
            <input
              type="text"
              className="inputBox"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="errorMesg">
              {formik.touched.name && formik.errors.name}
            </p>
          </div>

          <div className="pb-3">
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="inputBox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="errorMesg">
              {formik.touched.email && formik.errors.email}
            </p>
          </div>
          <div className="pb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="inputBox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="errorMesg">
              {formik.touched.password && formik.errors.password}
            </p>
          </div>
          <div className="pb-2">
            <button
              className="btn btn-dark w-100 font-weight-bold mt-2"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default Signup;
