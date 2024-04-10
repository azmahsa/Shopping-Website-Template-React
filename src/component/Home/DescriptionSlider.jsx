import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// import Image
import image6 from "../../assets/image6.avif";
import image7 from "../../assets/image7.avif";
import image8 from "../../assets/image8.jpeg";
import image9 from "../../assets/image9.jpeg";

const DescriptionSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  md:w-[800px] w-[500px]"
      >
        <SwiperSlide>
          <img src={image6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image9} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default DescriptionSlider;
