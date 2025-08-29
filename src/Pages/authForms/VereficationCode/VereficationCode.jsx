import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";

import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";

import successImg from "../../../images/authFormsImg/authFormsIcon/success.svg";
import "../authForms.scss";
import Button from "../../../Components/Buttons/Button";

export default function VereficationCode() {
  const [success, setSuccess] = useState(() => {
    const wasShow = localStorage.getItem("successShown");
    return wasShow !== "true";
  });
  const inputsRefFocus = [useRef(), useRef(), useRef(), useRef()];

  const navigate = useNavigate();
  const location = useLocation();
  const emailFromSignUp = location.state?.sendCode;

  const formik = useFormik({
    initialValues: {
      verefCode1: "",
      verefCode2: "",
      verefCode3: "",
      verefCode4: ""
    },
    onSubmit: async (value, { resetForm }) => {
      const verefCode = Object.values(value).join("");
      try {
        const res = await fetch("http://localhost:3004/verifCode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: Date.now(), code: verefCode })
        });
        if (res.ok) {
          localStorage.removeItem("successShown");
          resetForm();

          navigate("/create-account", {
            state: emailFromSignUp
          });
        }
      } catch (err) {
        navigate("/create-account", {
          state: emailFromSignUp
        });
      }
    }
  });

  useEffect(() => {
    if (!emailFromSignUp) {
      navigate("/sign-up");
    }
  }, [emailFromSignUp, navigate]);

  const handleCodeChange = (e, index) => {
    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 1);

    formik.setFieldValue(e.target.name, onlyDigits);

    if (onlyDigits && index < inputsRefFocus.length - 1) {
      inputsRefFocus[index + 1].current.focus();
    }
  };

  const handleSuccessOff = () => {
    setSuccess(false);
    localStorage.setItem("successShown", "true");
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (formik.values[`verefCode${index + 1}`]) {
        formik.setFieldValue(`verefCode${index + 1}`, "");
      } else if (index > 0) {
        inputsRefFocus[index - 1].current.focus();
      }
      e.preventDefault();
    }
  };

  return (
    <main className="mainContent">
      <div className="verefCodeForm">
        <div className="container">
          <div className="verefCodeFormContent">
            <div className="verefCodeSignUpFormContentBg" />
            <form onSubmit={formik.handleSubmit} className="form">
              <h1 className="formTitle">{emailFromSignUp}</h1>
              <p className="pVerefCode">We will send you an SMS with a verification code</p>
              <div className="formContent">
                <div className="formInput verefFormInput">
                  <label className="formLabel verefLabel" htmlFor="sendCode">
                    VERIFICATION CODE
                  </label>
                  <div className="inputsBox">
                    {[0, 1, 2, 3].map((i) => (
                      <input
                        key={i}
                        type="text"
                        name={`verefCode${i + 1}`}
                        placeholder="5"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength="1"
                        value={formik.values[`verefCode${i + 1}`]}
                        onChange={(e) => handleCodeChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        onBlur={formik.handleBlur}
                        ref={inputsRefFocus[i]}
                        className={`input verefInput`}
                      />
                    ))}
                  </div>
                </div>
                <Button type="submit" text={"VERIFY"} name={"signUpVerifyButton"} />
                
              </div>
            </form>
          </div>
        </div>
      </div>
      {emailFromSignUp && success && (
        <div className="successMain">
          <div onClick={() => handleSuccessOff()} className="successBg" />
          <div className="success">
            <div className="successContent">
              <img src={successImg} alt="success" />
              <p className="pSuccess">The code has been sent</p>
              <span className="spanSuccess">Write the code correctly for verifying the Email</span>
              <Button
                onClick={() => handleSuccessOff()}
                text={"Done"}
                name={"successButton"}
                style={{ textTransform: "uppercase" }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
