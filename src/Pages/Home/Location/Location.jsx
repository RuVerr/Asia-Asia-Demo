import React from "react";
import locIco from "../../../images/icons/location.png";
import { locations } from "../../../data/datas";
import "./location.scss";

const Location = () => {
  return (
    <section className="locations">
      <div className="container">
        {locations.map((el) => (
          <div className="locitem" key={el.id}>
            <img src={locIco} alt="Location" />
            <h4>{el.text}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Location;
