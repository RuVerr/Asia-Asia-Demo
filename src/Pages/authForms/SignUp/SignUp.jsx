import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { data, useLocation, useNavigate } from "react-router-dom";

import "../authForms.scss";
import Button from "../../../Components/Buttons/Button";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      sendCode: ""
    },
    validationSchema: Yup.object({
      sendCode: Yup.string()
        .email("Please enter a valid email address.")
        .matches(
          /^[^\s@]{4,}@[^\s@]+\.[a-z]{2,24}$/,
          "Email must contain at least 4 characters before @ and a valid domain"
        )
        .required("Email required")
    }),
    onSubmit: (values) => {
      navigate("/verification-code", {
        state: values
      });
    }
  });

  return (
    <main className="mainContent">
      <div className="signUpForm">
        <div className="container">
          <div className="signUpFormContent">
            <div className="signUpFormContentBg" />
            <form onSubmit={formik.handleSubmit} className="form">
              <h1 className="formTitle">Sign up</h1>
              <p className="pSignUp">
                Enter your valid email address for registration, then you will need to confirm it
              </p>
              <div className="formContent">
                <div className="formInput">
                  <label className="formLabel" htmlFor="sendCode">
                    Email
                  </label>
                  <input
                    type="text"
                    name="sendCode"
                    placeholder="JhonsonStatham@gmail.com"
                    value={formik.values.sendCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`input ${formik.touched.sendCode && formik.errors.sendCode ? "inputError" : ""}`}
                  />
                  <div className={formik.touched.sendCode && formik.errors.sendCode ? "showError" : "hideError"}>
                    {formik.errors.sendCode || <span>&nbsp;</span>}
                  </div>
                </div>
                <Button type="submit" text={"Send code"} name={"signUpMail"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
