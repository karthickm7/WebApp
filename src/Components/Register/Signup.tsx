import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../Register/Signup.css";
//import Login from "../Login/Login";
//import { useNavigate } from "react-router";
import { FormikValues, useFormik,FormikProps} from "formik";

interface MyFormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const initialValues: MyFormValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};
const Signup = () => {

  const formik:FormikProps<MyFormValues>= useFormik< MyFormValues>({
    initialValues
  });
 

  return (
    <div>
      <h1>signup</h1>
      <div className="form">
        
          <Container>
            <Form onSubmit={formik.handleSubmit} >
              <Form.Group className="mb-3">
                <Form.Label>firstName</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>LastName</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        
      </div>
    </div>
  );
};
export default Signup;
