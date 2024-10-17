import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="w-full">
      <div className="py-1 max-md:text-sm">
        <Marquee speed={30}>
          <a
            href="https://drive.google.com/file/d/1TKocCqe9AuEhi-3BiJ0GzzGvSXV_DgPq/view"
            target="_blank"
          >
            NSP 2.0 Scholarship Recipients (Fresh)
          </a>
          <div className="min-w-[30vw]"></div>

          <a
            href="https://drive.google.com/file/d/1sZ_wRZWvYveA1KHUXo1N8LnOHQ7Qsia-/view"
            target="_blank"
          >
            NSP 2.0 Scholarship Recipients (Renewal)
          </a>
          <div className="min-w-[30vw]"></div>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
