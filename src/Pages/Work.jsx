import React from "react";
import expe1 from "../Assets/Work/expe1.png";
import expe2 from "../Assets/Work/expe2.png";
import expe3 from "../Assets/Work/expe3.png";
import expe4 from "../Assets/Work/expe4.png";
import expe5 from "../Assets/Work/expe5.png";
import expe6 from "../Assets/Work/expe6.png";

const Work = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };
  return (
    <div className="w-full h-fit flex flex-col px-[40px] lg:px-[170px] ">
      <h1 className="text-white text-[14px] text-center py-4 lg:text-[60px] font-semibold">
        Work Experience - Infinite Learning Indonesia
      </h1>
      <hr className="opacity-30 text-white" />
      {/* experience 1 */}
      <div className="w-full h-fit flex flex-row justify-between gap-3">
        <div className="w-[30%]">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={expe1}
            className="w-full py-2 lg:py-[30px] opacity-80 hover:opacity-100 duration-500"
            alt="hizkia yogi rafael"
          />
        </div>
        <div className="w-[70%] flex items-center lg:justify-end">
          <h1 className="text-white text-[10px] text-right lg:text-[30px]">
            MSIB Web Development Technical Mentor [ Aug/14/2023 - Dec/14/2024 ]
          </h1>
        </div>
      </div>
      <hr className="opacity-30 text-white" />
      {/* experience 2 */}
      <div className="w-full h-fit flex flex-row justify-between gap-3">
        <div className="w-[30%]">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={expe2}
            className="w-full py-2 lg:py-[30px] opacity-80 hover:opacity-100 duration-500"
            alt="hizkia yogi rafael"
          />
        </div>
        <div className="w-[70%] flex items-center lg:justify-end">
          <h1 className="text-white text-[10px] text-right lg:text-[30px]">
            Red Hat Certified Instructor [ June/5/2023 - July/23/2023 ]
          </h1>
        </div>
      </div>
      <hr className="opacity-30 text-white" />
      {/* experience 3 */}
      <div className="w-full h-fit flex flex-row justify-between gap-3">
        <div className="w-[30%]">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={expe3}
            className="w-full py-2 lg:py-[30px] opacity-80 hover:opacity-100 duration-500"
            alt="hizkia yogi rafael"
          />
        </div>
        <div className="w-[70%] flex items-center lg:justify-end">
          <h1 className="text-white text-[10px] text-right lg:text-[30px]">
            Developer Festival 2023 Speaker - PWA [ May/29/2023 - May/31/2023 ]
          </h1>
        </div>
      </div>
      <hr className="opacity-30 text-white" />
      {/* experience 4 */}
      <div className="w-full h-fit flex flex-row justify-between gap-3">
        <div className="w-[30%]">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={expe4}
            className="w-full py-2 lg:py-[30px] opacity-80 hover:opacity-100 duration-500"
            alt="hizkia yogi rafael"
          />
        </div>
        <div className="w-[70%] flex items-center lg:justify-end">
          <h1 className="text-white text-[10px] text-right lg:text-[30px]">
            SMK Kepri Front End Bootcamp Mentor [ Aug/24/2023 - Jan/17/2024 ]
          </h1>
        </div>
      </div>
      <hr className="opacity-30 text-white" />
      {/* experience 5 */}
      <div className="w-full h-fit flex flex-row justify-between gap-3">
        <div className="w-[30%]">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={expe5}
            className="w-full py-2 lg:py-[30px] opacity-80 hover:opacity-100 duration-500"
            alt="hizkia yogi rafael"
          />
        </div>
        <div className="w-[70%] flex items-center lg:justify-end">
          <h1 className="text-white text-[10px] text-right lg:text-[30px]">
            Front End Regular Course [ Aug/14/2023 - june/30/2024 ]
          </h1>
        </div>
      </div>
      <hr className="opacity-30 text-white" />
      {/* experience 6 */}
      <div className="w-full h-fit flex flex-row justify-between gap-3">
        <div className="w-[30%]">
          <img
            draggable="false" // Mencegah drag
            onContextMenu={preventContextMenu}
            src={expe6}
            className="w-full py-2 lg:py-[30px] opacity-80 hover:opacity-100 duration-500"
            alt="hizkia yogi rafael"
          />
        </div>
        <div className="w-[70%] flex items-center lg:justify-end">
          <h1 className="text-white text-[10px] text-right lg:text-[30px]">
            MAN Insan Cendekia Bootcamp Mentor [ May/20/2024 - May/30/2024 ]
          </h1>
        </div>
      </div>
      <hr className="opacity-30 text-white" />
    </div>
  );
};

export default Work;
