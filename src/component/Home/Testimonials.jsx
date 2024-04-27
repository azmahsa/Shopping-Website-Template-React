import React from "react";
//*import Component
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <section className="relative mb-12 xl:mb-48 mt-48">
      <div className="container mx-auto px-7">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
        <h1 className="sm:text-3xl text-2xl font-medium mb-5 title-font text-gray-900">My Work </h1>
          <p className="  text-xl sm:text-2xl   mb-8">What customers say about Online Shop?</p>
        </div>
        {/* slider */}
        <div className=" xl:absolute right-0 top-0 ">
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
