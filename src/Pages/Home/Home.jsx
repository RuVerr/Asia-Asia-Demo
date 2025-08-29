import React from "react";
import Benefists from "./OurBenefist/Benefists";
import Reviews from "./Revievs/Reviews";
import Location from "./Location/Location";
import Recomendations from "./Recomendations/Recomendations";
import Partner from "./OurPartner/Partner";
import AboutUsHome from "./AboutUs/AboutUs";

import "./home.scss";

const Home = () => {
  return (
    <main className="mainContent">
      <Benefists />
      <Reviews />
      <Location />
      <Recomendations />
      <Partner />
    </main>
  );
};

export default Home;
