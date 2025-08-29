import React from "react";
import { benefistList } from "../../../data/datas";

import "./benefists.scss";
import "./benefistsMedia.scss";

const Benefists = () => {
  return (
    <section className="benefist container">
      <h2>OUR BENEFITS</h2>
      <div className="benefistList">
        {benefistList.map((el) => (
          <div className="benefistItem" key={el.id}>
            <img src={el.icon} alt="Nkars" />
            <h3>{el.title}</h3>
            <p>{el.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefists;
