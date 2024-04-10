import React from "react";
import { BiSupport } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function About() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            About Us
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Order now and become more beautiful with us
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center text-[40px] justify-center rounded-full bg-indigo-100 text-black mb-5 flex-shrink-0">
              <LiaShippingFastSolid />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Fast & Free Shipping
              </h2>
              <p className="leading-relaxed text-base">
                4-day or less delivery time, free shipping and an expedited
                delivery option.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex justify-center items-center gap-2">
                Learn More
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black text-[40px] mb-5 flex-shrink-0">
              <BiSupport />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                24/7 Support
              </h2>
              <p className="leading-relaxed text-base">
                answers to any business related inquiry 24/7 and in real-time.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex justify-center items-center gap-2">
                Learn More
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black text-[40px] mb-5 flex-shrink-0">
              <FaRegStar />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                High Quality
              </h2>
              <p className="leading-relaxed text-base">
                crafted from top materials
              </p>
              <a className="mt-3 text-indigo-500 inline-flex justify-center items-center gap-2">
                Learn More
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
