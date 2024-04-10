import React from "react";
import imageCat1 from "../../assets/categories11.jpg";
import imageCat2 from "../../assets/categories12.jpg";
import imageCat3 from "../../assets/categories13.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="  pt-24 mx-auto">
        <div className="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Categories
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Find what you are looking for
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-black inline-flex"></div>
          </div>
        </div>
        <div className="h-[750px] w-full bg-slate-200">
          <div className=" flex flex-wrap md:flex-row  justify-center md:items-start items-center md:gap-28 gap-10 ">
            <div className=" flex flex-col  items-center gap-4 font-bold">
              <img
                className=" md:w-[300px] md:h-[450px] w-[200px] h-[200px] rounded-2xl md:-mt-8 "
                src={imageCat1}
                alt=""
              />
              <span>Women Clothes</span>
            </div>
            <div className=" flex flex-col  items-center gap-4 font-bold">
              <img
                className="md:w-[300px] md:h-[450px] w-[200px] h-[200px] rounded-2xl md:mt-7"
                src={imageCat2}
                alt=""
              />
              <span>Men Clothes</span>
            </div>
            <div className=" flex flex-col justify-center  items-center gap-4 font-bold">
              <img
                className="md:w-[300px] md:h-[450px] w-[200px] h-[200px] rounded-2xl md:-mt-8 "
                src={imageCat3}
                alt=""
              />
              <span>Accessory</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-8 gap-3">
            <p className=" font-normal w-[70%] text-center">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-black md:ml-0 ml-52 text-white mt-2 w-[130px] flex justify-center items-center gap-2  px-5 py-2 rounded-lg">
              Explore
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
