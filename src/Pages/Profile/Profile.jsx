import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";

import { dailyProfitAndBalance } from "../../data/datas.js";
import Button from "../../Components/Buttons/Button.jsx";

import binanceLogo from "../../images/icons/binanceLogo.svg";
import pencilEditImg from "../../images/icons/pencilEdit.svg";
import closeImg from "../../images/icons/close.svg";

import "./profile.scss";
import "./profileMedia.scss";

export default function Profile() {
  const [binanceId, setBinanceId] = useState("");
  const [editing, setEditing] = useState(false);
  const [withdrawPopUp, setWithdrawPopUp] = useState(false);
  const navigate = useNavigate();

  const cardsFromLocal = localStorage.getItem("card");
  const user = localStorage.getItem("user");
  const cards = cardsFromLocal ? JSON.parse(cardsFromLocal) : [];

  if (!user) {
    navigate("/sign-in");
  }

  useEffect(() => {
    const saveId = localStorage.getItem("binanceId");
    if (saveId) {
      setBinanceId(saveId);
      setEditing(false);
    } else {
      setEditing(true);
    }
  }, []);

  const handleSubmit = (values) => {
    const binanceId = values.binanceId.trim();
    if (binanceId) {
      localStorage.setItem("binanceId", binanceId);
      setBinanceId(binanceId);
      setEditing(false);
    }
  };

  const handleNavigateInvest = () => {
    navigate("/invest");
  };

  const validationSchema = Yup.object({
    binanceId: Yup.string()
      .matches(/^[0-9]+$/)
      .max(35)
      .required("Обязательное поле")
  });

  const cardIncome = cards.reduce((acc, card) => {
    const income = parseFloat(card.income.replace(",", "."));
    return acc + (isNaN(income) ? 0 : income);
  }, 0);

  const balance = cards.reduce((acc, card) => {
    const dateNow = new Date();
    const addedDate = new Date(card.addedDate);
    const day = Math.floor((dateNow - addedDate) / (1000 * 60 * 60 * 24) + 1);

    const income = day * card.income.replace(",", ".");

    console.log(acc);

    return acc + income;
  }, 0);

  const body = document.body;
  const handleWithdrawPopUpButton = (value) => {
    switch (value) {
      case "withdrawTrue":
        setWithdrawPopUp(true);
        body.style.overflow = "hidden";
        break;
      case "withdrawFalse":
        setWithdrawPopUp(false);
        body.style.overflow = "auto";
        break;
      default:
        break;
    }
  };

  return (
    <main className="mainContent">
      <section className="dailyProfitAndBalanceMain">
        <div className="container">
          <div className="dailyProfitAndBalanceContent">
            {dailyProfitAndBalance.map((element, index) => (
              <div key={`${element.id} - ${index}`} className="dailyProfitAndBalance">
                <div className={element.class}>
                  <div className="titleAndButton">
                    <h2 className="titleDailyProfitAndBalance">{element.title}</h2>
                    <Button
                      onClick={() => handleWithdrawPopUpButton("withdrawTrue")}
                      name={element.buttonClass}
                      text={element.buttonTitle}
                    />
                  </div>
                  <div className="amountAndHistory">
                    {element.amountClass === "amount1" && (
                      <span className={element.amountClass}>{`${cardIncome.toFixed(2)}$`}</span>
                    )}
                    {element.amountClass === "amount2" && (
                      <span className={element.amountClass}>{`${balance.toFixed(2)}$`}</span>
                    )}
                    {element.history && <Button name={element.historyClass} text={element.history} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="stockAndMethod">
            <div className="container">
              <div className="stockAndMethodContent">
                <div className="yourStock">
                  <h2 className="stockTitle">YOUR STOCKS</h2>
                  {cards.length > 0 ? (
                    <div className="yourStockBox">
                      <div className="yourStockBoxInCard">
                        {cards.map((card, index) => (
                          <div
                            key={`${card.id}+${index}`}
                            className="yourStockBoxCards"
                            style={{ backgroundImage: `url(${card.backImgHD})` }}
                          >
                            <div className="cardTitleAndParagraph">
                              <h1 className="cardTitle">{card.title}</h1>
                              <p className="pCard">{card.text}</p>
                            </div>
                            <div className="amountAndIncome">
                              <span className="amount">{`Amount: ${card.amount}$`}</span>
                              <span className="income">{`Daily income: ${card.income}$`}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="yourStockBox">
                      <div className="stock">
                        <p className="pStock">STOCK ARE UNAVAILABLE</p>
                        <Button onClick={() => handleNavigateInvest()} name={"stockButton"} text={"INVEST NOW"} />
                      </div>
                    </div>
                  )}
                </div>
                <div className="withdrawalMethod">
                  <h2 className="withdrawalMethodTitle">WITHDRAWAL METHOD</h2>
                  <div className="withdrawalMethodContent">
                    <div className="binanceLogoBox">
                      <img className="binanceLogo" src={binanceLogo} alt="binance logo" />
                    </div>
                    <p className="withdrawalMethodTitle">Network</p>
                    <p className="pWithdrawalMethod">BNB Smart Chain (BEP20)</p>
                    <p className="withdrawalMethodTitle">Currency</p>
                    <p className="pWithdrawalMethod">USDT</p>
                    {editing ? (
                      <Formik
                        initialValues={{ binanceId: editing ? "" : binanceId }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        {({ setFieldValue, value }) => (
                          <Form className="binanceId">
                            <p className="binanceIdTitle">Binance ID</p>
                            <Field
                              inputMode="numeric"
                              pattern="[0-9]*"
                              type="text"
                              name={"binanceId"}
                              className="binanceIdInput"
                              placeholder="12355654448654"
                              onChange={(e) => {
                                const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                                setFieldValue("binanceId", onlyNums.slice(0, 35));
                              }}
                            />
                            <Button type="submit" name={"binanceIdButton"} text={"SAVE"} />
                          </Form>
                        )}
                      </Formik>
                    ) : (
                      <>
                        <p className="binanceIdTitle">Binance ID</p>
                        <div className="binanceIdAmountBox">
                          <p className="binanceIdAmount">{binanceId}</p>
                          <Button
                            onClick={() => setEditing(true)}
                            name={"pencilEditButton"}
                            text={<img className="pencilEdit" src={pencilEditImg} alt="Pencil" />}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {withdrawPopUp && (
            <>
              <div onClick={() => handleWithdrawPopUpButton("withdrawFalse")} className="bgFocus" />
              <div className="withdrawPopUp">
                <button onClick={() => handleWithdrawPopUpButton("withdrawFalse")} className="withdrawPopUpClose">
                  <img src={closeImg} alt="Close button" />
                </button>
                <h2 className="withdrawPopUpTitle">WITHDRAW</h2>
                <div className="withdrawAmountBox">
                  <h3 className="withdrawAmountTitle">WITHDRAW AMOUNT</h3>
                  <span className="withdrawAmount">{`${balance}$`}</span>
                  <p className="pWithdraw">
                    The commission is <b>15%</b> of the payout amount
                    <br />
                    <br />
                    Withdrawal amount including commission: {`${balance}$`}
                  </p>
                </div>
                <p className="pAvailable">AVALIABLE BALANCE</p>
                <p className="pAvailableAmount">20 000 $</p>
                <Button name={"withdrawPopUpButton"} text={"CONFIRM WITHDRAW"} />
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
