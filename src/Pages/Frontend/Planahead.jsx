import React from "react";
import Footer from "../../Components/Footer";
import Contentnav from "../../Components/Contentnav";
import satu from "../../Assets/Frontend/Planahead/satu.png";
import dua from "../../Assets/Frontend/Planahead/dua.jpg";

const Planahead = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };
  return (
    <div className="w-fit-screen h-fit bg-black text-white font-manrope px-[25px] lg:px-[170px]">
      {/* Navbar */}
      <Contentnav />
      {/* Judul Project */}
      <div className="w-full h-fit flex flex-row justify-between items-end mt-4 lg:pb-2">
        <h1 className="text-[18px] lg:text-[40px]">Plan a Head.</h1>
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
        Description : Plan A Head is a website that helps users organize
        schedules and increase their productivity through an effective and
        easy-to-use website, by providing features that allow users to create
        to-do lists, create a shared management framework or commonly called
        scrum, schedule activities, to analysis to monitor user progress
      </h1>
      <hr className="opacity-30 text-white" />
      {/* Project Type */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Project Type</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Planner Management System
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Link */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Link</a>
        <a className="lg:text-[20px] text-[10px] text-right">None</a>
      </div>
      <hr className="opacity-30 text-white" />
      {/* FE Github */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">FE Github</a>
        <a className="lg:text-[20px] text-[10px] text-right ">Soon</a>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Figma */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Figma</a>
        <a
          href="https://www.figma.com/design/MbmbWeFKvvAVHzOvDq7UgO/Design?node-id=0-1&t=pWtdTmCJ9un3hgIk-1"
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
          Visual Studio Code, HTML, & Vanila CSS
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Team */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Team</a>
        <h1 className="lg:text-[20px] text-[10px] text-right break-words">
          Hizkia Yogi Rafael, Friska Mei, Ariffal juanda, Glenys llona, Ahmad
          Wahyu
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Development Time */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[25px] text-[12px]">Development Time</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">One Month</h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Planahead;
