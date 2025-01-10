import React from "react";
import circle from "../Assets/circlenav.png";
import { Link } from "react-router-dom";
import arrow from "../Assets/arrowdown.png";

const Navbar = () => {
  return (
    <div className="fixed bg-black text-white font-manrope w-full h-[40px] flex justify-center items-center gap-2 lg:h-[60px]">
      <img
        src={circle}
        className="w-[30px] lg:w-[50px]"
        alt="hizkia yogi rafael"
      />
      <h1 className="text-[11px] lg:text-[20px]">
        too Modern for Navbar - <span className="font-bold">Scroll Down </span>
        to Take a Look
      </h1>
      <img
        src={arrow}
        className="w-[15px] lg:w-[22px]"
        alt="hizkia yogi rafael"
      />
    </div>
  );
};

export default Navbar;
