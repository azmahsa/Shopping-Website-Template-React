import React from "react";
//*import Component
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <section>
      <div className=" container mx-auto">
        <div className=" min-h-[600px] ">
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px] ">
            <h2 className="text-[25px] font-medium leading-tight text-left mb-[50px] text-black w-80">
              What customers say about Online Shop?
            </h2>
            <TestimonialsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
