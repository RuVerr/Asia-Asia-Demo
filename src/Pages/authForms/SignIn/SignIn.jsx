import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../../Components/Buttons/Button";

import "../authForms.scss";
import "./signIn.scss";

export default function SignIn() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      logIn: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log("Отправка данных", values);
    }
  });

  return (
    <main className="mainContent">
      <div className="signInForm">
        <div className="container">
          <div className="signInFormContent">
            <div className="signInFormContentBg" />
            <form onSubmit={formik.handleSubmit} className="form">
              <h1 className="formTitle">Sign in</h1>
              <div className="formContent">
                <div className="formInput">
                  <label className="formLabel" htmlFor="logIn">
                    Login
                  </label>
                  <input
                    type="text"
                    name="logIn"
                    placeholder="JhonsonStatham@gmail.com"
                    value={formik.values.logIn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input"
                  />
                </div>
                <div className="formInput">
                  <label className="formLabel" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="**********"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input"
                  />
                  <Link className="forgetPassword">Forget password</Link>
                </div>

                <Button onClick={() => navigate("/sign-up")} text={"Sign Up"} name={"signInUpForm"} />
                <Button text={"Sign In"} name={"signInInForm"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
