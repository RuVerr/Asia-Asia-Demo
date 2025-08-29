import React from "react";
import full from "../../../../images/icons/fullStarSvg.svg";
import empty from "../../../../images/icons/emptyStarSvg.svg";
import "./swiperUserCard.scss";

const SwiperUserCard = ({ user }) => {
  return (
    <div className="userCard">
      <div className="userData">
        <img src={user?.userImg} alt="User" />
        <div className="nameAndRating">
          <p>{user?.fullName}</p>
          <div className="rating">
            {user?.rating.map((el, index) => (
              <img src={el ? full : empty} alt="Stars" key={index} />
            ))}
          </div>
        </div>
      </div>
      <p className="userInfo">{user?.info}</p>
    </div>
  );
};

export default SwiperUserCard;
