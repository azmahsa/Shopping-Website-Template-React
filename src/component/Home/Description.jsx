import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import DescriptionSlider from "./DescriptionSlider";
const Description = () => {
  return (
    <div className="">
      <div className="container mx-auto mt-24 flex flex-col md:flex-row justify-between items-center  ">
        <div className="left md:w-[30%] flex flex-col gap-5 text-center md:text-left mb-3 ">
          <h1 className="text-[#484848] text-2xl font-medium">
            Deals Of The Month
          </h1>
          <p className="text-[#8A8A8A] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. duiens
            ultrices sollicipttudin aliquam sem. Sceleridsque duis ultrices
            sollicitudin
          </p>
          <button className="bg-black md:ml-0 ml-52 text-white mt-2 w-[130px] flex justify-center items-center gap-2  px-5 py-2 rounded-lg">
            Buy Now
            <FaLongArrowAltRight />
          </button>
          <div className="bottom pt-4 mx-auto md:mx-0 mb-5 ">
            <div>
              <h1 className=" text-[#484848] text-lg font-medium pb-2">
                Hurry, Before It’s Too Late!
              </h1>
            </div>
            <div className="flex gap-4">
              <span className=" rounded-lg shadow-xl drop-shadow-md p-3 text-xl font-medium flex justify-center items-center ">
                02
              </span>
              <span className=" rounded-lg shadow-xl drop-shadow-md p-3 text-xl font-medium flex justify-center items-center ">
                06
              </span>
              <span className=" rounded-lg shadow-xl drop-shadow-md p-3 text-xl font-medium flex justify-center items-center ">
                05
              </span>
              <span className=" rounded-lg shadow-xl drop-shadow-md p-3 text-xl font-medium flex justify-center items-center ">
                30
              </span>
            </div>
            <div className="flex gap-10 text-sm font-medium pt-2  text-[#484848]">
              <span className="ml-2">Days</span>
              <span>Hr</span>
              <span>Mins</span>
              <span>Sec</span>
            </div>
          </div>
        </div>
        <div>
          <DescriptionSlider />
        </div>
      </div>
    </div>
  );
};

export default Description;
