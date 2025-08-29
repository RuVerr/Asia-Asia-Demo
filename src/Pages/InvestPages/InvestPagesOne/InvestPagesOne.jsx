import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import arrowIcon from "../../../images/icons/arrow.svg";
import { recomend } from "../../../data/datas";

import Button from "../../../Components/Buttons/Button";

import "../investPagesMain.scss";
import "./investPagesOneMedia.scss";

export default function InvestPagesOne() {
  const [profitAmount, setProfitAmount] = useState("0");
  const [blueResult, setBlueResult] = useState("");

  const user = localStorage.getItem("user");

  const navigation = useNavigate();
  const location = useLocation();

  const param = useParams();

  const cardInfo = recomend.find((el) => Number(param.id) === el.id);
  const from = location.state?.from === "/invest" ? "/invest" : "/";

  const handlePagesTwoNext = (id) => {
    navigation(`/invest-now-page/${id}`, {
      state: {
        from: location.pathname,
        cardInfo: cardInfo,
        fromInvestOrHome: from
      }
    });
  };

  const handleProfitAmount = (amount) => {
    if (amount === cardInfo.income) {
      setBlueResult("5deg");
    } else if (amount === cardInfo.monthlyProfit) {
      setBlueResult("90deg");
    } else {
      setBlueResult("365deg");
    }
    setProfitAmount(amount);
  };

  return (
    <main className="mainContant">
      <section className="investPagesOne">
        <div className="container">
          <div className="investPagesOneContent">
            <div className="fromButton">
              <button className="investPagesOneFromButton" onClick={() => navigation(-1)}>
                {(from === "/" && "Home") || (from === "/invest" && "Invest")}
              </button>
              <img src={arrowIcon} alt="Arrow" />
              <button
                className={location.pathname === `/investment-page/${param.id}` ? "active" : "thisLocationButton"}
              >
                {cardInfo.title}
              </button>
            </div>
            <div className="investPagesOneContentInfo">
              <div className="mainCard" style={{ backgroundImage: `url(${cardInfo.backImgHD})` }}>
                <div className="mainCardTop">
                  <h2 className="mainCardTitle">{cardInfo.title}</h2>
                  <Button
                    onClick={() => handlePagesTwoNext(cardInfo.id)}
                    name={"investPagesOneButton"}
                    text={"INVEST NOW"}
                  />
                </div>
                <div className="mainCardBottom">
                  <span className="mainCardTopPrice">{`Amount: ${cardInfo.amount}$`}</span>
                  <span className="mainCardTopIncome">{`Daily income: ${cardInfo.income}$`}</span>
                </div>
              </div>
            </div>
            <div className="profitAndImportant">
              <div className="profit">
                <h2 className="profitTitle">PROFIT</h2>
                <div className="profitContent">
                  <div className="profitCircle">
                    <div className="blueResult" style={{ "--angle": blueResult }} />
                    <div className="circleInCircle">
                      <span className="circleAmount">{`${profitAmount}$`}</span>
                    </div>
                  </div>
                  <div className="profitButton">
                    <button onClick={() => handleProfitAmount(cardInfo.income)} className="profitButton">
                      Daily Profit
                    </button>
                    <button onClick={() => handleProfitAmount(cardInfo.monthlyProfit)} className="profitButton">
                      Monthly Profit
                    </button>
                    <button onClick={() => handleProfitAmount(cardInfo.annualProfit)} className="profitButton">
                      Annual Profit
                    </button>
                  </div>
                </div>
              </div>
              <div className="important">
                <h2 className="importantTitle">IMPORTNANT TO KNOW</h2>
                <p className="pImportant">
                  When you buy this stock, you’re not becoming a co-owner of our restaurant chain. Instead, you’re
                  contributing to its growth and development. In return, you receive daily payouts based on your
                  investment amount.
                  <br />
                  <br />
                  Why is it so simple? Because every dollar you invest is managed by our marketing experts, who analyze
                  the market and create strategic plans to multiply your investment. Their goal is to ensure steady
                  growth without unnecessary risks.
                  <br />
                  <br />
                  This way, it’s a win-win opportunity for both sides. Plus, there’s no time limit on your daily
                  earnings!
                </p>
                <Button onClick={() => handlePagesTwoNext(cardInfo.id)} name={"importantButton"} text={"INVEST NOW"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
