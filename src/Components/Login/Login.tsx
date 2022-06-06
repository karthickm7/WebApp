import React ,{ useState, useEffect }from "react";
import "../Login/Login.css";

import { useNavigate } from "react-router";
import { Formik} from "formik";


import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../../State /Action/Action";
import { Container } from "react-bootstrap";

const Login = () => {
  let navigate = useNavigate();
  const dispatch: any = useDispatch();
  const user = useSelector((state: any) => state.allreducer.user);
  console.log(user,'login user')

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
  console.log("testschema", user);
  const [values, setValues] = useState<any>("");

  useEffect(() => {
    dispatch(getuser());
    console.log("getcall")
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={(data) => {
        console.log("clicked 1", data);
        setValues(data);
        navigate("/home");
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Container>
          <h1>Login</h1>
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
            <button className="btn btn-dark  font-weight-bold "> Submit</button>
          </div>
          </Container>
        </form>
      )}
    </Formik>
  );
};
export default Login;
