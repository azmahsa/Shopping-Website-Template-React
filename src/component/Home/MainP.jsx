import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
const Main = () => {
  return (
    <div className="md:px-12 p-4  max-w-screen-2xl mx-auto mt-24" id="home">
      <div className=" container mx-auto flex flex-col md:flex-row justify-between gap-3 items-center md:items-stretch  ">
        <div className="left w-[410px] relative h-[570px] bg-[#e0e0e0] rounded-2xl">
          <img
            className=" w-[340px] mx-auto absolute bottom-0 "
            src={image1}
            alt=""
          />
        </div>
        <div className="center flex flex-col items-center gap-2">
          <div className="top relative overflow-hidden  w-[420px] h-[35%] bg-[#e0e0e0] rounded-2xl">
            <img
              className=" md:absolute left-5 bottom-[-20px] w-[340px] mx-auto "
              src={image3}
              alt=""
            />
          </div>
          <div className="center flex flex-col h-[40%] justify-center items-center ">
            <h1 className=" text-5xl text-center md:text-5xl font-bold text-[#484848]">
              Online Shop
            </h1>
            <h6 className="text-4xl text-center pt-6 pb-4 md:text-xl  text-[#2b2a2a]">
              New Collection
            </h6>
            <button className="bg-black text-white  px-6 py-3 rounded-lg">
              SHOP NOW
            </button>
          </div>
          <div className="bottom relative overflow-hidden  w-[400px] h-[35%] bg-[#e0e0e0] rounded-2xl ">
            <img
              className=" md:absolute left-5 bottom-[-30px] w-[340px] mx-auto "
              src={image4}
              alt=""
            />
          </div>
        </div>

        <div className="right relative w-[410px] h-[570px] bg-[#e0e0e0] rounded-2xl">
          <img
            className=" w-[220px] absolute bottom-0 left-1/4 "
            src={image2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
