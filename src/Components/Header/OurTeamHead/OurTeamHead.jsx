import React from "react";

import ourTeamHeader from "../../../images/headerBackgroundImages/our-team-header.png";

import "./ourTeamHead.scss";
import "./ourTeamHeadMedia.scss";

export default function OurTeam() {
  return (
    <header className="ourTeamHead" style={{ backgroundImage: `url(${ourTeamHeader})` }}>
      <h1 className="ourTeamTitle">MEET THE TEAM</h1>
    </header>
  );
}
