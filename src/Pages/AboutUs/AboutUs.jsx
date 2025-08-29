import React from "react";

import "./aboutUsMedia.scss";
import "./aboutUs.scss";

export default function AboutUs() {
  return (
    <main className="mainContent">
      <section className="aboutUs">
        <div className="container">
          <div className="aboutUsContent">
            <h1 className="aboutUsTitle">We are moment makers: experience creators and boundary breakers.</h1>
            <div className="pAboutUsContent">
              <div className="pAboutUs pAboutUsBox1">
                With over two decades pioneering the global hospitality sector, Solutions Group has risen to lead as the
                UAE’s most awarded F&B group, with a mission to create those magical memories in the every day.
              </div>
              <div className="pAboutUs pAboutUsBox2">
                Founded on the shores of Hurghada, Egypt, by Paul Evans and Freek Teusink in 2001 over a (very) loose
                handshake, the brand expanded to Dubai in 2011 with the creation of its approachable, relatable middle
                man hospitality scene.
              </div>
              <div className="pAboutUs pAboutUsBox3">
                Driven by our unparalleled commitment, ever-evolving skill and bold direction, we’re proud to be leaders
                in concept creation, culture generation and hospitality management.
              </div>
              <div className="pAboutUs pAboutUsBox4">
                Fun, exciting and always surprising, we’re only just getting started.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
