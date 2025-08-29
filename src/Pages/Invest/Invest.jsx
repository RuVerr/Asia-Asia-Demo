import React, { useEffect } from "react";

import { recomend } from "../../data/datas";
import RecomendationCard from "../../Components/RecomendationCard/RecomendationCard";
import useScreenResize from "../../Hooks/useScreenResize";
import { useSelector } from "react-redux";

import "./invest.scss";
import "./investMedia.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Invest = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/invest", { state: location.pathname });
  }, [location.navigate]);

  useScreenResize();
  const isMobile = useSelector((state) => state.screen.isMobile);
  return (
    <main className="mainContant">
      <section className="invest container">
        <div className="invest_withdraw">
          <h2>
            INVESTED TODAY
            <span>15,000 $</span>
          </h2>
          <h2>
            WITHDRAWAN TODAY
            <span>35,800 $</span>
          </h2>
        </div>
        <div className="invest_cards">
          <RecomendationCard cardCount={8} />
        </div>
      </section>
    </main>
  );
};

export default Invest;
