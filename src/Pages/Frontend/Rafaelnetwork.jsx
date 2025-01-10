import React from "react";
import Contentnav from "../../Components/Contentnav";
import satu from "../../Assets/Frontend/Rafaelnetwork/satu.jpg";
import dua from "../../Assets/Frontend/Rafaelnetwork/dua.png";
import Footer from "../../Components/Footer";

const Rafaelnetwork = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };
  return (
    <div className="w-fit-screen h-fit bg-black text-white font-manrope px-[25px] lg:px-[170px]">
      {/* Navbar */}
      <Contentnav />
      {/* Judul Project */}
      <div className="w-full h-fit flex flex-row justify-between items-end mt-4 lg:pb-2">
        <h1 className="text-[18px] lg:text-[40px]">RafaelNetwork.</h1>
        <h1 className="text-[11px] lg:text-[20px]">Frontend Development.</h1>
      </div>
      {/* Gambar Project */}
      <div className="w-full h-fit flex flex-col lg:flex-row justify-between gap-3 pt-2 pb-3">
        {/* gambar 1 */}
        <div className="lg:w-[50%]">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={satu}
            alt="hizkia yogi rafael"
          />
        </div>
        {/* gambar 2 */}
        <div className="lg:w-[50%]">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={dua}
            alt="hizkia yogi rafael"
          />
        </div>
      </div>
      {/* Description */}
      <h1 className="text-[11px] pb-2 lg:text-[20px] lg:pb-4">
        Description : Front end Project which is Company Profile for
        RafaelNetwork that provides all Rafael Network Portfolio.
      </h1>
      <hr className="opacity-30 text-white" />
      {/* Project Type */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Project Type</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Company Profile
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Link */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Link</a>
        <a
          href="https://rafaelnetwork.vercel.app/"
          className="lg:text-[20px] text-[10px] text-right hover:text-gray-500"
        >
          https://rafaelnetwork.vercel.app/
        </a>
      </div>
      <hr className="opacity-30 text-white" />
      {/* FE Github */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">FE Github</a>
        <a
          href="https://github.com/hizkiayogirafael/personalprofile.git"
          className="lg:text-[20px] text-[10px] text-right hover:text-gray-500"
        >
          https://github.com/hizkiayogirafael/personalprofile
        </a>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Figma */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Figma</a>
        <a
          href="https://www.figma.com/design/oCx0BUvgtDLoXwkZaQdUNG/Website?node-id=0-1&t=9bftXMeeqEamlLpV-1"
          className="lg:text-[20px] text-[10px] text-right hover:text-gray-500"
        >
          Open Figma Here
        </a>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Software & Tech Stack */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Software & TechStack</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Visual Studio Code, HTML, TailwindCSS, and ReactJS.
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Team */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Team</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Hizkia Yogi Rafael
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Development Time */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Development Time</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">One Day</h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Rafaelnetwork;
