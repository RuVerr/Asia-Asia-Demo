import React from "react";
import { ourTeamCard } from "../../data/datas";

import "./ourTeam.scss";
import "./ourTeamMedia.scss";

export default function OurTeam() {
  return (
    <main className="mainContent">
      <section className="ourTeam">
        <div className="container">
          <div className="ourTeamContent">
            {ourTeamCard.map((el) => (
              <div key={el.id} className="ourTeamCard">
                <div className="imagesBox">
                  <img className="peopleImg" src={el.image} alt="People" aria-label="" />
                </div>
                <div className="ourTimeTextBox">
                  <h2 className="titleCard">{el.title}</h2>
                  <h3 className="subTitleCard">{el.subTitle}</h3>
                  <div className="p_card">
                    {Array.isArray(el.paragraph) ? (
                      el.paragraph.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                    ) : (
                      <p>{el.paragraph}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
