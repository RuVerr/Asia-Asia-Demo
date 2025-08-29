import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useLocation, useNavigate } from "react-router-dom";

import successImg from "../../../images/authFormsImg/authFormsIcon/success.svg";
import Button from "../../../Components/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Store/authSlice/authSlice";

import "../authForms.scss";

export default function CreateAccount() {
  const [success, setSuccess] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const idRef = React.useRef(Date.now());

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromSignUp = location.state;

  const formik = useFormik({
    initialValues: {
      id: idRef.current,
      name: "",
      lName: "",
      password: "",
      confPassword: "",
      email: emailFromSignUp
    },
    validationSchema: Yup.object({
      name: Yup.string().required("The name is required").min(2, "The name is too short").max(10).trim(),
      lName: Yup.string().required("Last name is mandatory").min(2, "Last name is too short").max(10).trim(),
      password: Yup.string().required("Password is required").min(6, "Password is too short").max(10).trim(),
      confPassword: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("password")], "Check the password match and try again")
        .required("Password is required")
    }),
    onSubmit: (values, { resetForm }) => {
      // const user = await res.json();
      dispatch(login(values));
      setSuccess(true);
      resetForm();
      // try {
      //   const res = await fetch("http://localhost:3004/user", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify(values)
      //   });
      //   if (res.ok) {
      //   }
      // } catch (err) {
      //   console.error(err);
      // }
    }
  });

  useEffect(() => {
    if (!emailFromSignUp) {
      navigate("/sign-up");
    }

    if (success) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [success, emailFromSignUp, navigate]);

  const handleCreateAcc = () => {
    navigate("/invest");
  };

  const inputs = [
    {
      id: 0,
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Antony"
    },
    {
      id: 1,
      name: "lName",
      type: "text",
      label: "Last name",
      placeholder: "Mamardashvili"
    },
    {
      id: 2,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "**********"
    },
    {
      id: 3,
      name: "confPassword",
      type: "password",
      label: "Confirm password",
      placeholder: "**********"
    }
  ];
  return (
    <main className="mainContent">
      <div className="createAccForm">
        <div className="container">
          <div className="createAccFormContent">
            <div className="createAccFormContentBg" />
            <form onSubmit={formik.handleSubmit} className="form">
              <h1 className="formTitle">{emailFromSignUp}</h1>
              <div className="formContent">
                {inputs.map(({ id, name, type, label, placeholder }) => (
                  <div key={id} className="formInput createAccFormInput">
                    <label className="formLabel" htmlFor={name}>
                      {label}
                    </label>
                    <input
                      className="input"
                      type={type}
                      name={name}
                      value={formik.values[name]}
                      onChange={formik.handleChange}
                      placeholder={placeholder}
                      onBlur={formik.handleBlur}
                    />
                    <p className={formik.touched[name] && formik.errors[name] ? "showError" : "hideError"}>
                      {formik.touched[name] && formik.errors[name] ? formik.errors[name] : <span>&nbsp;</span>}
                    </p>
                  </div>
                ))}
                <Button type="submit" text={"CREATE ACCOUNT"} name={"signUpCreateAccountButton"} />
              </div>
            </form>
          </div>
        </div>
      </div>
      {success && (
        <div className="successMain">
          <div onClick={() => setSuccess(false)} className="successBg" />
          <div className="success">
            <div className="successContent">
              <img src={successImg} alt="success" />
              <p className="pSuccess">The account has been crated</p>
              <Button onClick={() => handleCreateAcc()} text={"Invest now"} name={"successButton"} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
