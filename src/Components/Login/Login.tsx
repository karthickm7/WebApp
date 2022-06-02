import React from "react";

import { Form, Field } from "react-final-form";
import Styles from "./Styles";
import Input from "./Input";
import { ThemeProvider } from "react-bootstrap";

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const onSubmit = async (values) => {
//   await sleep(1000);
//   window.alert(JSON.stringify(values));
// };

const theme = {
  main: "mediumseagreen",s
};

const Forms = () => (
  <Styles>
    <h1>React final Form</h1>
    {/* <h2>Password Confirmation validation</h2> */}
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        if (!values.confirm) {
          errors.confirm = "Required";
        } else if (values.confirm !== values.password) {
          errors.confirm = "password and confirm password must match";
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, _values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>UserName</label>
                <Input dummy={input} type="text" placeholder="user name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <Input dummy={input} type="password" placeholder="password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="confirm">
            {({ input, meta }) => (
              <div>
                <label>Confirm</label>
                <Input
                  dummy={input}
                  type="password"
                  placeholder=" Confirm Password"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="button">
            <ThemeProvider theme={theme}>
              <button type="submit" disabled={submitting}>
                {" "}
                submit
              </button>
            </ThemeProvider>

            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              {" "}
              Reset
            </button>
          </div>
          {/* <pre>{JSON.stringify(values)}</pre> */}
        </form>
      )}
    />
  </Styles>
);
export default Forms;
