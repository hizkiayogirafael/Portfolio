import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const Contentnav = () => {
  return (
    <div className="w-full bg-black text-white h-fit flex justify-center items-center py-2 font-manrope lg:py-5">
      <Link to="/">
        <h1 className="flex flex-row items-center gap-1 lg:text-[20px]">
          <TiArrowLeftThick />
          Back to Home
        </h1>
      </Link>
    </div>
  );
};

export default Contentnav;
