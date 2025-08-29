import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import arrowIcon from "../../../images/icons/arrow.svg";
import binanceLogo from "../../../images/icons/binanceLogo.svg";
import screenshotIcon from "../../../images/icons/camera.svg";
import Button from "../../../Components/Buttons/Button";

import congratulationsImg from "../../../images/icons/congratulations.svg";
import "../investPagesMain.scss";
import "./investPagesTwoMedia.scss";

export default function InvestPagesTwo() {
  const [screenshot, setScreenshot] = useState(null);
  const [congratulations, setCongratulations] = useState(false);

  const user = localStorage.getItem("user");

  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();
  const { cardInfo, fromInvestOrHome } = location.state || {};

  console.log(param);
  

  if (!user) {
    navigate(`/sign-in`);
  }

  const handleScreenShot = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setScreenshot(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const body = document.body;
  const handleCongratulations = () => {
    setCongratulations(true);
    document.body.style.overflow = "hidden";

    cardInfo.addedDate = new Date();

    const newCard = JSON.parse(localStorage.getItem("card")) || [];

    const updateCard = [...newCard, cardInfo];

    localStorage.setItem("card", JSON.stringify(updateCard));
  };

  const handleCongratulationsNextProfile = () => {
    setCongratulations(false);
    document.body.style.overflow = "auto";
    navigate("/profile");
  };

  return (
    <main className="mainContent">
      <section className="investPagesTwo">
        <div className="container">
          <div className="investPageTwoContent">
            <div className="fromButton">
              <button className="investPagesTwoFromButton" onClick={() => navigate(fromInvestOrHome)}>
                {(fromInvestOrHome === "/invest" && "Invest") || (fromInvestOrHome === "/" && "Home")}
              </button>
              <img src={arrowIcon} alt="Arrow" />
              <button className="investPagesTwoFromButton" onClick={() => navigate(-1)}>
                {cardInfo.title}
              </button>
              <img src={arrowIcon} alt="Arrow" />
              <button
                className={location.pathname === `/invest-now-page/${param.id}` ? "active" : "thisLocationButton"}
              >{`Invest ${cardInfo.title}`}</button>
            </div>
            <div className="cardAndPay">
              <div className="mainCard" style={{ backgroundImage: `url(${cardInfo.investCardNowImg})` }}>
                <h2 className="mainCardTitle">{cardInfo.title}</h2>
                <div className="amountInDaily">
                  <span className="amount">{`Amount: ${cardInfo.amount}`}</span>
                  <span className="daily">{`Daily income: ${cardInfo.income}`}</span>
                </div>
              </div>
              <div className="pay">
                <div className="payBinanceImgBox">
                  <img className="payBinanceLogo" src={binanceLogo} alt="Binance Logo" />
                </div>
                <div className="payInfo">
                  <p className="pPayTitle">Network</p>
                  <span className="paySpanInfo">BNB Smart Chain (BEP20)</span>
                  <p className="pPayTitle">Currency</p>
                  <span className="paySpanInfo">{cardInfo.amount}</span>
                </div>
                <div className="screenShotAndQR">
                  <p className="screenShotAndQRTitle">Please post the transaction confirmation screenshot here</p>
                  <div className="screenshotIconAndQr">
                    <label className="screenshot">
                      <input className="screenshotInput" type="file" accept="image/*" onChange={handleScreenShot} />
                      {!screenshot ? (
                        <div className="screenshotIconBox">
                          <img className="screenshotIconImg" src={screenshotIcon} alt="Screenshot" />
                        </div>
                      ) : (
                        <img className="screenshotImage" src={screenshot} alt="Screenshot" />
                      )}
                    </label>
                    <img src={cardInfo.cardQR} alt="QR" />
                  </div>
                </div>
                <div className="checkBoxAndButton">
                  <form className="checkboxAndButton">
                    <div className="formCheckbox">
                      <label className="customCheckbox">
                        <div className="customCheckboxBox">
                          <input className="checkboxInput" type="checkbox" required />
                          <span className="customSpan" />
                          <span className="checkBoxText">
                            I have read and agree to the website
                            <a className="formLink" href="#">
                              privacy policy
                            </a>
                          </span>
                        </div>
                      </label>
                    </div>
                    <div className="formCheckbox">
                      <label className="customCheckbox">
                        <div className="customCheckboxBox">
                          <input className="checkboxInput" type="checkbox" required />
                          <span className="customSpan" />
                          <span className="checkBoxText">
                            I have read and agree to the website
                            <a className="formLink" href="#">
                              terms of us
                            </a>
                          </span>
                        </div>
                      </label>
                    </div>
                    <Button
                      onClick={() => handleCongratulations()}
                      name={"formCheckBoxButton"}
                      text={"CREATE A REQUEST"}
                    />
                  </form>
                </div>
              </div>
            </div>
            {congratulations && (
              <>
                <div className="bgFocus" />
                <div className="congratulations">
                  <img className="congratulationsImg" src={congratulationsImg} alt="Congratulations icon" />
                  <h2 className="congratulationsTitle">Congratulations</h2>
                  <p className="pCongratulations">
                    You have made your first deposit. If we confirm your request, you will receive a cashback of{" "}
                    <span className="spanCongratulations">14,8$</span> in honor of your first deposit
                  </p>
                  <Button
                    onClick={() => handleCongratulationsNextProfile()}
                    text={"GO TO PROFILE"}
                    name={"congratulationsButton"}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
