import React, { Dispatch } from "react";
import "../Register/Signup.css";
import { Formik } from "formik";

import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { adduser } from "../../State /Action/Action";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import { borderRadius } from "@mui/system";

export interface Istate {
  name: string;
  email: string;
  password: string;
}

export interface disp<T> {
  action: any;
  type: T;
  payload: string | number;
}
// export type dispatches =  typeof disp.dispatch

const Signup = () => {
  let navigate = useNavigate();
  let dispatch: Dispatch<any> = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email("Invalid email format").required(),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required(),
  });

  return (
    <Formik
      initialValues={{
        id: uuidv4(),
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={(data) => {
        dispatch(adduser(data));
        navigate("/login");
      }}
    >
      {(formik) => (
        <>
          <div className="container">
            <div>
              <img
                className="image"
                style={{}}
                src="https://miro.medium.com/max/1043/1*uMxwajzG5l3n2x7_izXdHw.png"
                alt=""
              />
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <h1>Signup</h1>
                <div className="pb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="inputBox"
                    placeholder="UserName"
                    name="name"
                    style={{ marginLeft: "40px" }}
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
                    style={{ marginLeft: "40px" }}
                    type="text"
                    name="email"
                    className="inputBox"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <p className="errorMesg">
                    {formik.touched.email && formik.errors.email}
                  </p>
                </div>
                <div>
                  <label> Password</label>
                  <input
                    style={{ marginLeft: "10px" }}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="inputBox"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <p className="errorMesg">
                    {formik.touched.password && formik.errors.password}
                  </p>
                </div>
                <div className="pb-2">
                  <button className="btn btn-dark font-weight-bold ">
                    {" "}
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};
export default Signup;
