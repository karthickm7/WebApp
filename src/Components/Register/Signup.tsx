import React from "react";
import "../Register/Signup.css";
import { Formik } from "formik";

import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { adduser } from "../../State /Action/Action";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";

export interface Istate {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  let navigate = useNavigate();
  let dispatch: any = useDispatch();
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
        // console.log("clicked 1", data);

        dispatch(adduser(data));
        navigate("/login");
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <h1>Signup</h1>
          <div className="pb-3">
            <label>Name</label>
            <input
              type="text"
              className="inputBox"
              placeholder="UserName"
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
              placeholder="Email"
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
            <button className="btn btn-dark font-weight-bold "> Submit</button>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default Signup;
