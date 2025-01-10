import React from "react";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import rafaelnetwork from "../../Assets/Frontend/rafaelnetwork.png";
import meshcode from "../../Assets/Frontend/meshcode.png";
import inventory from "../../Assets/Frontend/inventory.png";
import planahead from "../../Assets/Frontend/planahead.png";
import danaamal from "../../Assets/Frontend/danaamal.png";
import comingsoon from "../../Assets/Frontend/comingsoon.png";

const Frontend = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };
  return (
    <div className="flex flex-col 2-full h-fit lg:px-[170px] px-[40px] font-manrope lg:mb-12">
      {/* Judul Front End */}
      <div className="flex flex-col text-white mt-6 font-semibold pb-3 lg:text-[48px]">
        <h1>Project Journey</h1>
        <h1>Front End Development.</h1>
      </div>
      {/* Card front end 1*/}
      <div className="w-full h-fit flex flex-col lg:flex-row justify-between pb-3 lg:pb-5 gap-3">
        <Link
          to="/Rafaelnetwork"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={rafaelnetwork}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-white outline-1 ">
            <TfiWorld className="text-white" />
            RafaelNetwork
          </button>
        </Link>

        <Link
          to="/Meshcode"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={meshcode}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            Meshcode.id
          </button>
        </Link>
        <Link
          to="/Ilventory"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={inventory}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            IL-Ventory
          </button>
        </Link>
      </div>
      {/* Card front end 2*/}
      <div className="w-full h-fit flex flex-col lg:flex-row justify-between pb-3 gap-3">
        <Link
          to="/Planahead"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={planahead}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            Plan a Head
          </button>
        </Link>
        <Link
          to="/Danaamal"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={danaamal}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            Dana Amal Polibatam
          </button>
        </Link>
        <Link className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={comingsoon}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            Coming Soon
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Frontend;
