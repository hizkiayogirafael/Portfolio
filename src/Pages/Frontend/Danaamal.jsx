import React from "react";
import Footer from "../../Components/Footer";
import Contentnav from "../../Components/Contentnav";
import satu from "../../Assets/Frontend/Danaamal/satu.png";
import dua from "../../Assets/Frontend/Danaamal/dua.jpg";

const Danaamal = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };
  return (
    <div className="w-fit-screen h-fit bg-black text-white font-manrope px-[25px] lg:px-[170px]">
      {/* Navbar */}
      <Contentnav />
      {/* Judul Project */}
      <div className="w-full h-fit flex flex-row justify-between items-end mt-4 lg:pb-2">
        <h1 className="text-[18px] lg:text-[40px]">Dana Amal Polibatam</h1>
        <h1 className="text-[11px] lg:text-[20px]">Fullstack Development.</h1>
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
        Description : This web-based Charity Wallet Application System functions
        to record social funds deposited monthly by all Polibatam employees.
        These funds will be taken for social interests such as employee position
        benefits, medical assistance, marriages, childbirth and other relevant
        social activities.
      </h1>
      <hr className="opacity-30 text-white" />
      {/* Project Type */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Project Type</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Charity Wallet Application System
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Link */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Github</a>
        <as
          href="https://github.com/budi3312101075/PBL-IF-23.git"
          className="lg:text-[20px] text-[10px] text-right hover:text-gray-500"
        >
          https://github.com/budi3312101075/PBL-IF-23.git
        </as>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Figma */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Figma</a>
        <a
          href="https://www.figma.com/design/97fXohujqvrU9267v8WMyg/mockup-DAP?node-id=0-1&t=kx6eN4aaAgNjMH6g-1"
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
          Visual Studio Code, HTML, CSS, Bootstrap, Codeigniter3, PHP, MySQL
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Team */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Team</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Hizkia Yogi Rafael, Budi Prayoga
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Development Time */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Development Time</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">Three Month</h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Danaamal;
