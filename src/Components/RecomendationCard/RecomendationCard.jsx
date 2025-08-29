import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { recomend } from "../../data/datas";

import "./recomendationCard.scss";
import "./recomendationMedia.scss";

const RecomendationCard = ({ cardCount }) => {
  const navigation = useNavigate();
  const location = useLocation();

  const investPagesOneNext = (id) => {
    navigation(`/investment-page/${id}`, {
      state: {
        from: location.pathname
      }
    });
  };

  return (
    <>
      {recomend.slice(0, cardCount).map((el) => (
        <div
          onClick={() => investPagesOneNext(el.id)}
          className="recCard"
          style={{ backgroundImage: `url('${el.backImg}')` }}
          key={el.id}
        >
          <h2>{el.title}</h2>
          <p>{el.text}</p>
          <div className="priceAndProc">
            <pre>Amount: {el.amount} $</pre>
            <pre>Daily income: {el.income} $</pre>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecomendationCard;
