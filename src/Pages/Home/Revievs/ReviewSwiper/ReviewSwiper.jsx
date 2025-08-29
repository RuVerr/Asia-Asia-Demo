import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { reviewUsersInfo } from "../../../../data/datas";
import SwiperUserCard from "../SwiperUserCard/SwiperUserCard";

import "./reviewSwiper.scss";
import "./reviewSwiperMedia.scss";
import "swiper/css";

const ReviewSwiper = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      observer={true}
      observeParents={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      modules={[]}
      className="mySwiper"
    >
      {reviewUsersInfo.map((user) => (
        <SwiperSlide key={user.id + "66"}>
          <SwiperUserCard user={user} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSwiper;
