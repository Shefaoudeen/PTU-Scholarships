import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1e6c93] h-[23vh] sm:h-[28vh] text-white p-5 flex items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-medium text-lg sm:text-2xl">Maintained by</h1>
          <div className="flex flex-col items-center justify-center text-lg sm:text-2xl mt-3">
            <h1>Puducherry Technological University</h1>
            <h1>Puducherry-6050144.</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
