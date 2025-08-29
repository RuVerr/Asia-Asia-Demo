import React, { useState } from "react";

import ReviewSwiper from "./ReviewSwiper/ReviewSwiper";
import Button from "../../../Components/Buttons/Button";

import { reviewUsersInfo } from "../../../data/datas";
import emptyStarSvg from "../../../images/icons/emptyStarSvg.svg";
import fullStarSvg from "../../../images/icons/fullStarSvg.svg";
import close from "../../../images/icons/close.svg";
import defaultAvatar from "../../../images/authFormsImg/authFormsIcon/defaultAvatar.png";

import "./reviews.scss";
import "./reviewsMedia.scss";
const Reviews = () => {
  const [leavePopUp, setLeavePopUp] = useState(false);
  const [rating, setRating] = useState(0);

  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  const starClick = (e, index) => {
    e.preventDefault();
    setRating(index + 1);
  };

  const body = document.body;
  const handleLeavePopUpShow = () => {
    setLeavePopUp((prev) => {
      const newValue = !prev;
      body.style.overflow = newValue ? "hidden" : "auto";
      return newValue;
    });
  };

  const handleRatingData = (e) => {
    e.preventDefault();
    const ratingText = new FormData(e.target);
    const ratingData = Object.fromEntries(ratingText.entries());

    if (ratingData.info === "") return;

    ratingData.rating = Array(5)
      .fill(false)
      .map((_, i) => i < rating);

    ratingData.fullName = user.name;
    ratingData.userImg = defaultAvatar;

    reviewUsersInfo.push(ratingData);

    setReviewText("");
    setRating(0);
    setActiveButton(false);
    setLeavePopUp(false);
  };

  return (
    <section className="reviews container">
      <h2 className="reviewsTitle">REVIEWS</h2>
      <div className="reviewBox">
        <ReviewSwiper />
        <Button onClick={() => handleLeavePopUpShow()} text={"LEAVE A REVIEW"} name={"review"} />
        {leavePopUp && (
          <>
            <div onClick={() => handleLeavePopUpShow()} className="bgFocus" />
            <div className="leavePopUp">
              <div className="leaveTitleAndClose">
                <h2 className="leaveTitle">LEAVE A REVIEW</h2>
                <button onClick={() => handleLeavePopUpShow()} className="closeLeave">
                  <img src={close} alt="Close" />
                </button>
              </div>
              <div className="titleInputAndStar">
                <span className="titleInputAndStarTitle">Share your experience</span>
                <form onSubmit={handleRatingData}>
                  <input name="info" type="text" className="leaveInput" placeholder="Share your impressions with us" />
                  <div className="starBox">
                    {[1, 2, 3, 4, 5].map((__, index) => (
                      <button key={index} className="starButton" onClick={(e) => starClick(e, index)}>
                        <img className="starImg" src={index < rating ? fullStarSvg : emptyStarSvg} alt="Stars" />
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => handleLeavePopUpShow()}
                    className={rating > 0 ? "titleInputAndStarFormButtonActive" : "titleInputAndStarFormButton"}
                  >
                    LEAVE A REVIEW
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="aboutAndInvest">
        <div className="about">
          <h2>ABOUT OUR PROJECT</h2>
          <p>
            Asia Asia is a project that offers unique opportunities for those seeking not only profit but also
            involvement in a successful and innovative story. We combine the best traditions of Asian cuisine with
            modern style, creating a unique space for investors and food lovers
          </p>
        </div>
        <div className="investWhy">
          <h2>WHY INVEST</h2>
          <p>
            Our project is not just a restaurant. It is a successful and rapidly growing business that has already
            established itself in the market. We offer a limited opportunity for investors to become part of this
            successful journey, benefiting from its growth and prosperity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
