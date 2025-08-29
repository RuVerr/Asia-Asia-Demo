import React from "react";

import investBack from "../../../images/headerBackgroundImages/investBack.png";

import "./investHead.scss";
import "./mediaInvestHead.scss";

const InvestHead = () => {
  return (
    <header className="investHeader" style={{ backgroundImage: `url(${investBack})` }}>
      <div className="investHeaderTitleBox">
        <h1>
          GET <span>5% CASHBACK</span> ON THE TOTAL AMOUNT OF YOUR <br />
          FIRST PURCHASE INSTANTLY
        </h1>
      </div>
    </header>
  );
};

export default InvestHead;
