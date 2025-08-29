import React from "react";
import { ourJourneyCard } from "../../data/datas";

import "./ourJourney.scss";
import "./ourJourneyMedia.scss";

export default function OurJourney() {
  return (
    <main className="mainContent">
      <section className="ourJourney">
        <div className="container">
          <h3 className="ourJourneyTitle">
            From one bar in Egypt to the most awarded food and beverage company in Dubai, take a trip down memory lane
            with our journey so far. <br />
            We’re only just getting started.
          </h3>
          {ourJourneyCard.map((el) => (
            <div className="ourJourneyCardMain" key={el.id}>
              <div className="ourJourneyCard">
                <img className="ourJourneyCardImg" src={el?.image} alt="" />
                <h2 className="ourJourneyCardTitle">{el?.title}</h2>
                <p className="pOurJourneyCard">{el.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
