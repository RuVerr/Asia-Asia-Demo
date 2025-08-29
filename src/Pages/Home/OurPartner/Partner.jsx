import React from "react";
import { partnerImgs } from "../../../data/datas";

import "./partner.scss";
import "./mediaPartner.scss";
const Partner = () => {
  return (
    <section className="partners container">
      <h2>OUR PARTNERS</h2>
      <div className="partnerImages">
        {partnerImgs.map((partner, index) => (
          <img key={index} src={partner} alt="Partners" />
        ))}
      </div>
    </section>
  );
};

export default Partner;
