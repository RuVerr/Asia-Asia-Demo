import React from "react";
import { useNavigate } from "react-router-dom";

import bigLogo from "../../../images/bigLogo.png";
import Button from "../../Buttons/Button";

import headerBack from "../../../images/headerBackgroundImages/headerBack.png";

import "./header.scss";
import "./mediaHeader.scss";

const Header = () => {
  const navigate = useNavigate();
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString) || null;

  return (
    <header className="homeHeader" style={{ backgroundImage: `url(${headerBack})`, content: "" }}>
      {user ? (
        <>
          <div className="bigLogo">
            <img style={{ display: "block" }} src={bigLogo} alt="Big Logo" />
          </div>
          <div className="homeHeaderArrows" />
        </>
      ) : (
        <>
          <div className="leftHeader">
            <h1>INVEST IN THE FUTURE OF CULINARY EXPERIENCE WITH ASIA ASIA</h1>
            <p>
              Join a unique project that blends Asian culinary traditions with modern style. Asia Asia is where
              exquisite cuisine meets lucrative investment opportunities. Invest in a dynamic industry with high
              potential and stable returns.
            </p>
            <span>INVESTED: 1000+ </span>
            <Button
              dataTextV1={"JOIN NOW AND START EARNING TODAY"}
              dataTextV2={"START EARNING TODAY"}
              onClick={() => navigate("/sign-up")}
              name={"headBtn"}
            />
            <Button text={"SIGN IN"} onClick={() => navigate("/sign-in")} name={"headBtnSignIn"} />
          </div>
          <img src={bigLogo} alt="Big Logo" />
        </>
      )}
    </header>
  );
};

export default Header;
