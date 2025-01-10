import React from "react";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { GrCloudDownload } from "react-icons/gr";
import socialmedia from "../../Assets/Design/socialmedia.png";
import maufe from "../../Assets/Design/maufe.png";
import rukur from "../../Assets/Design/rukur.png";
import bumem from "../../Assets/Design/bumem.jpg";
import meddy from "../../Assets/Design/meddy.png";
import tujuhkonser from "../../Assets/Design/tujuhkonser.png";
import designcv from "../../Assets/Design/designcv.pdf";

const Design = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };
  return (
    <div className="flex flex-col 2-full h-fit lg:px-[170px] px-[40px] font-manrope lg:mb-12">
      {/* Judul Front End */}
      <div className="flex flex-col lg:flex-row justify-between text-white mt-6 font-semibold pb-3 lg:text-[48px]">
        <div>
          <h1>Project Journey</h1>
          <h1>Graphic Design & User Interface.</h1>
        </div>
        <div className="pt-2 lg:pt-0 flex lg:justify-end ">
          <a
            download="designcv.pdf"
            href={designcv}
            className="text-[12px] lg:text-[25px] flex flex-row lg:pb-2 gap-1 lg:gap-3 hover:text-gray-400 font-medium justify-end items-end"
          >
            <GrCloudDownload />
            Download Design CV - Paper
          </a>
        </div>
      </div>
      {/* Card front end 1*/}
      <div className="w-full h-fit flex flex-col lg:flex-row justify-between pb-3 lg:pb-5 gap-3">
        <Link
          to="/Tujuhkonser"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={tujuhkonser}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            TujuhKonser
          </button>
        </Link>

        <Link
          to="/MedicineTeddy"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={meddy}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            Medicine Teddy
          </button>
        </Link>
        <Link
          to="Socialmedia"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={socialmedia}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            Social Media
          </button>
        </Link>
      </div>
      {/* Card front end 2*/}
      <div className="w-full h-fit flex flex-col lg:flex-row justify-between pb-3 gap-3">
        <Link
          to="/Bumem"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={bumem}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            Warung Bu Mem
          </button>
        </Link>
        <Link
          to="/Rukur"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={rukur}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            Rukur Community
          </button>
        </Link>
        <Link
          to="/Maufe"
          className="group w-full lg:w-[32.5%] h-fit bg-black outline outline-white outline-1 rounded-[15px] flex flex-col items-center justify-center p-2 lg:p-3 hover:bg-zinc-800 duration-700 hover:text-white"
        >
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={maufe}
            className="w-full rounded-[15px]"
            alt="hizkia yogi rafael"
          />
          <button className="text-[10px] text-white lg:text-[20px] mt-2 lg:mt-4 rounded-3xl w-fit h-fit px-2 lg:px-4 py-1 lg:mb-2 flex items-center gap-1 outline outline-black outline-1 group-hover:outline-white">
            <TfiWorld />
            Maufe House
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Design;
