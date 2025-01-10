import React from "react";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import crud from "../../Assets/Fullstack/crud.png";
import ilventory from "../../Assets/Fullstack/ilventory.png";
import dana from "../../Assets/Fullstack/dana.png";

const Fullstack = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };
  return (
    <div className="flex flex-col 2-full h-fit lg:px-[170px] px-[40px] font-manrope lg:mb-12">
      {/* Judul Front End */}
      <div className="flex flex-col text-white mt-6 font-semibold pb-3 lg:text-[48px]">
        <h1>Project Journey</h1>
        <h1>Fullstack & Backend Development.</h1>
      </div>
      {/* Card front end 1*/}
      <div className="w-full h-fit flex flex-col lg:flex-row justify-between pb-3 lg:pb-5 gap-3">
        <Link
          to="/Ilventory"
          className="group w-full lg:w-[32.5%] h-fit lg:bg-black bg-zinc-900 outline lg:outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-white duration-500 lg:hover:bg-zinc-900"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={ilventory}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-1 group-hover:text-black outline-none lg:group-hover:text-white lg:group-hover:outline lg:group-hover:outline-1 lg:group-hover:outline-white">
            <TfiWorld />
            IL - Ventory
          </button>
        </Link>

        <Link
          to="/Notes"
          className="group w-full lg:w-[32.5%] h-fit lg:bg-black bg-zinc-900 outline lg:outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-white duration-500 lg:hover:bg-zinc-900"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={crud}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-1 group-hover:text-black outline-none lg:group-hover:text-white lg:group-hover:outline lg:group-hover:outline-1 lg:group-hover:outline-white">
            <TfiWorld />
            MSIB - CRUD Notes Excercise
          </button>
        </Link>
        <Link
          to="/Danaamal"
          className="group w-full lg:w-[32.5%] h-fit lg:bg-black bg-zinc-900 outline lg:outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-white duration-500 lg:hover:bg-zinc-900"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={dana}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-1 group-hover:text-black outline-none lg:group-hover:text-white lg:group-hover:outline lg:group-hover:outline-1 lg:group-hover:outline-white">
            <TfiWorld />
            Dana Amal Polibatam
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Fullstack;
