import React from "react";
import bannerBG from "../assets/Images/bannerBG.png";
import ptuLogo from "../assets/Images/ptu-logo.png";

const Banner = (props) => {
  return (
    <>
      <div
        className="md:h-[40vh] bg-no-repeat bg-cover max-md:hidden"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-evenly md:justify-between h-full pt-16 md:pt-0 py-5 sm:px-12">
          <div className="">
            <a href="https://ptuniv.edu.in/" target="_blank">
              <img className="w-32 md:w-40" src={ptuLogo}></img>
            </a>
          </div>
          <div className=" flex flex-col items-center gap-4 text-4xl px-10">
            <h1 className="text-blue-300 font-semibold text-center">
              {props.title}
            </h1>
            <h1
              className={`text-wrap text-2xl text-white text-center ${props.desc_style}`}
            >
              {props.desc}
            </h1>
            <h1 className="text-wrap text-2xl text-white">
              {props.additional}
            </h1>
          </div>
          <div className="lg:w-20 xl:w-40 hidden lg:block"></div>
        </div>
      </div>
      <div
        className="md:hidden bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <div className="flex md:flex-row items-center justify-evenly md:justify-between h-full pt-10 md:pt-0 py-5 sm:px-12">
          <div className="pl-5">
            <a href="https://ptuniv.edu.in/" target="_blank">
              <img className="w-20 md:w-40" src={ptuLogo}></img>
            </a>
          </div>
          <div className=" flex flex-col items-center gap-4 text-lg">
            <h1 className="text-blue-300 font-semibold text-center">
              {props.title}
            </h1>
            <h1
              className={`text-wrap text-sm text-white text-center ${props.desc_style}`}
            >
              {props.desc}
            </h1>
            <h1 className="text-wrap text-2xl text-white">
              {props.additional}
            </h1>
          </div>
          <div className="min-w-8"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
