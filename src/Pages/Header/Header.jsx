import React from "react";
import fotosatu from "../../Assets/Header/foto1.png";
import fotodua from "../../Assets/Header/foto2.png";
import fototiga from "../../Assets/Header/foto3.png";
import fotoempat from "../../Assets/Header/foto4.png";
import fotolima from "../../Assets/Header/foto5.png";
import fotoenam from "../../Assets/Header/foto6.png";
import fototujuh from "../../Assets/Header/foto7.png";

const Header = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };

  return (
    <div className="w-full h-fit flex flex-col items-center gap-2 mt-[40px] lg:mt-[70px] lg:mb-16 font-manrope">
      <h1 className="text-white text-[13px] lg:text-[50px] text-center">
        Welcome, to <span className="font-bold">Hizkia Yogi Rafael</span>{" "}
        Portfolio Platform.
      </h1>
      <div className="w-full h-fit flex flex-row flex-wrap justify-center gap-2 lg:gap-5 px-[10px] lg:pb-4">
        <img
          draggable="false" // Mencegah drag
          onContextMenu={preventContextMenu}
          src={fotosatu}
          className="w-[100px] lg:w-[420px] max-w-full hover:outline hover:outline-white hover:outline-4 hover:rounded-[29px] transition-all duration-500"
          alt="hizkia yogi rafael"
        />
        <img
          draggable="false" // Mencegah drag
          onContextMenu={preventContextMenu}
          src={fotodua}
          className="w-[100px] lg:w-[420px] max-w-full hover:outline hover:outline-white hover:outline-4 hover:rounded-[29px] transition-all duration-500"
          alt="hizkia yogi rafael"
        />
        <img
          draggable="false" // Mencegah drag
          onContextMenu={preventContextMenu}
          src={fototiga}
          className="w-[60px] lg:w-[260px] max-w-full hover:outline hover:outline-white hover:outline-4 hover:rounded-[29px] transition-all duration-500"
          alt="hizkia yogi rafael"
        />
      </div>
      <div className="w-[80%] lg:w-full h-fit flex flex-row flex-wrap justify-center gap-2 lg:gap-5 px-[10px]">
        <img
          draggable="false" // Mencegah drag
          onContextMenu={preventContextMenu}
          src={fotoempat}
          className="w-[90px] lg:w-[420px] max-w-full hover:outline hover:outline-white hover:outline-4 hover:rounded-[29px] transition-all duration-500"
          alt="hizkia yogi rafael"
        />
        <img
          draggable="false" // Mencegah drag
          onContextMenu={preventContextMenu}
          src={fotolima}
          className="w-[90px] lg:w-[420px] max-w-full hover:outline hover:outline-white hover:outline-4 hover:rounded-[29px] transition-all duration-500"
          alt="hizkia yogi rafael"
        />
        <img
          draggable="false" // Mencegah drag
          onContextMenu={preventContextMenu}
          src={fotoenam}
          className="w-[90px] lg:w-[420px] max-w-full hover:outline hover:outline-white hover:outline-4 hover:rounded-[29px] transition-all duration-500"
          alt="hizkia yogi rafael"
        />
        <img
          draggable="false" // Mencegah drag
          onContextMenu={preventContextMenu}
          src={fototujuh}
          className="w-[55px] lg:w-[250px] max-w-full hidden hover:outline hover:outline-white hover:outline-4 hover:rounded-[29px] transition-all duration-500"
          alt="hizkia yogi rafael"
        />
      </div>
      <h1 className="text-white text-[13px] lg:text-[30px] text-center pb-4">
        Some Documentation of{" "}
        <span className="font-bold">Hizkia Yogi Rafael.</span>
      </h1>
    </div>
  );
};

export default Header;
