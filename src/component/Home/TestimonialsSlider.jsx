import React from "react";
//* import Swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
//* import swiper style
import "swiper/css";
import "swiper/css/pagination";
//import required moduules
import { Pagination } from "swiper/modules";
//import image
import commentimg1 from "../../assets/commentimg1.png"
import commentimg2 from "../../assets/commentimg2.png"
import commentimg3 from "../../assets/commentimg1.png"


import { IoStar } from "react-icons/io5";

const TestimonialsSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="bg-slate-200 rounded-xl border h-[300px] overflow-hidden  xl:max-w-[800px] pt-[60px] px-[35px] xl:px-[70px] mb-10 pb-[50px] flex items-start  shadow-xl  ">
        <div className="ml-8 flex flex-col justify-start items-start">
          <div>
            <p className=" text-justify">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <div className="flex w-full  justify-between pt-10">
            <div className="flex w-[200px] ">
              <img className=" -ml-24 -mt-2 " src={commentimg1} alt="" />
              <div className=" text-base w-full  font-bold">
                John Doe <br />{" "}
                <span className=" text-sm font-normal text-slate-400">
                  Youtuber
                </span>
              </div>
            </div>
            <div>
              <div className="mb-4 flex justify-center items-center gap-3 font-semibold text-accent-primary">
                <IoStar />
                4.5
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-slate-200 rounded-xl border h-[300px] overflow-hidden  xl:max-w-[800px] pt-[60px] px-[35px] xl:px-[70px] mb-10 pb-[50px] flex items-start  shadow-xl  ">
        <div className="ml-8 flex flex-col justify-start items-start">
          <div>
            <p className=" text-justify">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <div className="flex w-full  justify-between pt-10">
            <div className="flex w-[200px] ">
              <img className=" -ml-24 -mt-2 " src={commentimg2} alt="" />
              <div className=" text-base w-full  font-bold">
                John Doe <br />{" "}
                <span className=" text-sm font-normal text-slate-400">
                  Youtuber
                </span>
              </div>
            </div>
            <div>
              <div className="mb-4 flex justify-center items-center gap-3 font-semibold text-accent-primary">
                <IoStar />
                4.5
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-slate-200 rounded-xl border h-[300px] overflow-hidden  xl:max-w-[800px] pt-[60px] px-[35px] xl:px-[70px] mb-10 pb-[50px] flex items-start  shadow-xl  ">
        <div className="ml-8 flex flex-col justify-start items-start">
          <div>
            <p className=" text-justify">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <div className="flex w-full  justify-between pt-10">
            <div className="flex w-[200px] ">
              <img className=" -mt-2 " src={commentimg3} alt="" />
              <div className=" text-base w-full font-bold">
                John Doe <br />
                <span className=" text-sm font-normal text-slate-400">
                  Youtuber
                </span>
              </div>
            </div>
            <div>
              <div className="mb-4 flex justify-center items-center gap-3 font-semibold text-accent-primary">
                <IoStar />
                5.5
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialsSlider;
