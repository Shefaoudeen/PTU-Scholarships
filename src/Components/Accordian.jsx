import React, { useState } from "react";
import arrowIcon from "../assets/icons/arrow-icon.svg";
import { scholar_details } from "../Data/scholarshipsData";
import Marque from "./Marque";

const Accordian = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);

  const handleOnClick = (element) => {
    accordionOpen === element
      ? setAccordionOpen(null)
      : setAccordionOpen(element);
    console.log(accordionOpen);
  };

  return (
    <div className="w-full">
      <div>
        <div className="flex items-center justify-center bg-[#1e6c93] text-white text-2xl py-8 px-6 font-semibold">
          <Marque />
        </div>
        {/* accordian section */}
        <div className="md:w-[75vw] m-auto py-5 max-md:px-5">
          {scholar_details.map((ele, index) => {
            return (
              <div className="border-[#1e6c93] border-b-2 py-2" key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleOnClick(index)}
                >
                  <h1 className="text-[#1e6c93] font-semibold text-2xl md:py-5 max-md:text-lg py-3">
                    {ele.title}
                  </h1>
                  <div className="pr-4">
                    <img
                      src={arrowIcon}
                      className={`w-4 duration-300 ${
                        accordionOpen == index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-center">
                  {accordionOpen === index ? (
                    <div
                      className={`w-full flex flex-col text-justify ${
                        accordionOpen !== index ? "max-h-0" : "h-fit"
                      } transition-all duration-1000 ease-linear`}
                    >
                      {ele.description !== "" ? (
                        <div className="text-xl max-md:text-sm">
                          <p>
                            <span>&nbsp; &nbsp; &nbsp; </span>
                            {ele.description}
                          </p>
                        </div>
                      ) : null}
                      <ul className="p-4 text-blue-400 font-medium max-md:text-sm">
                        {ele.links.map((subele, subindex) => {
                          return (
                            <li className="list-disc" key={subindex}>
                              <a href={subele.directTo} target="_blank">
                                {subele.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
