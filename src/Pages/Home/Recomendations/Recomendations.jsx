import React from "react";
import { Link } from "react-router-dom";
import RecomendationCard from "../../../Components/RecomendationCard/RecomendationCard";

import "./recomendations.scss";
import "./recomendationsMedia.scss";

const Recomendations = () => {
  return (
    <section className="recomendation container">
      <div className="recomendationTitle">
        <h2>RECOMMENDATION</h2>
        <Link to={"/invest"}>See all</Link>
      </div>
      <div className="recomendationCards">
        <RecomendationCard cardCount={4} />
      </div>
    </section>
  );
};

export default Recomendations;
