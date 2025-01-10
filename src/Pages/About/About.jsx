import React from "react";
import lanyard from "../../Assets/About/lanyard.png";
import { TbWorldDownload } from "react-icons/tb";
import cv from "../../Assets/About/cv.pdf";

const About = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };
  return (
    <div className="w-full h-fit flex flex-col items-center lg:px-[170px]">
      {/* about 1 */}
      <div className="w-full h-fit flex flex-col lg:flex-row items-center gap-1 pb-2 lg:pb-20">
        {/* image */}
        <div className="lg:w-[50%] flex justify-center">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={lanyard}
            className="w-[300px] lg:w-[85%] opacity-80 hover:opacity-100 transition-all duration-500"
            alt="hizkia yogi rafael"
          />
        </div>
        {/* text */}
        <div className="text-white px-[40px] lg:w-[50%]">
          <h1 className="text-center lg:text-left font-semibold hidden lg:block lg:text-[36px]">
            btw, Who is..
          </h1>
          <h1 className="text-center lg:text-left text-[36px] xl:text-[80px] font-bold 2xl:text-[58px]">
            hizkia yogi rafael"
          </h1>
          <h1 className="text-justify font-medium lg:font-normal text-[11px] lg:text-[30px] flex flex-row 2xl:text-[25px]">
            - Graduate Informatic Student Study Program of Informatic
            Engineering at Batam State Polytechnic.
          </h1>
          <h1 className="text-justify font-medium lg:font-normal text-[11px] lg:text-[30px] flex flex-row 2xl:text-[25px]">
            - Excellent communication, collaboration, and responsibility at
            work.
          </h1>
          <h1 className="text-justify font-medium lg:font-normal text-[11px] lg:text-[30px] flex flex-row 2xl:text-[25px]">
            - Specializing in Web Development & Digital Creative .
          </h1>
          <a
            className="font-medium lg:font-normal text-[13px] lg:text-[30px] flex flex-row items-center gap-2 lg:justify-start justify-center pt-3 hover:text-gray-400 transition-all duration-500"
            download="cv.pdf"
            href={cv}
          >
            <TbWorldDownload className="text-white hover:text-gray-400 transition-all duration-500" />
            Download CV Paper Here.
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
