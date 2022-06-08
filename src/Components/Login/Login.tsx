import React, { useEffect } from "react";
import "../Login/Login.css";

import { useNavigate } from "react-router";
import { Formik } from "formik";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../../State /Action/Action";
import{adduserlogin}from "../../State /Action/Action"

export interface Istates {
  
  email: string;
  password: string;
}

const Login = () => {
  let navigate = useNavigate();
  const dispatch: any = useDispatch();
  const user = useSelector((state: any) => state.allreducer.user);
  console.log(user, "login user");

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required(),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required(),
  });
  //console.log("testschema", user);

  // useEffect(() => {
  //   dispatch(getuser());
  //   console.log("getcall");
  // }, [dispatch]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={(data) => {
        console.log("clicked 1", data);

        dispatch(adduserlogin(data))
        navigate('/home')
        // const validate = (userdata: any) => {
        //   return userdata.email === values.email;
        // };
        // let currentUser = user.find(validate);
        // if (currentUser) {
        //   
        // }
       
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="Container">
            <h1>Login</h1>
            <div className="pb-3">
              <label>Email</label>
              <input
                type="text"
                name="email"
                // value={formik.values.email}
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
                // value={formik.values.password}
                className="inputBox"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="errorMesg">
                {formik.touched.password && formik.errors.password}
              </p>
            </div>
            <div className="pb-2">
              <button className="btn btn-dark  font-weight-bold ">
                {" "}
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default Login;
