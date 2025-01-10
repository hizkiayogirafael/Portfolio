import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Certificate = () => {
  return (
    <div className="w-full h-fit flex flex-col px-[40px] lg:px-[170px] text-white">
      <h1 className="lg:pt-14 pt-6 lg:pb-6 pb-2 text-[18px] font-semibold lg:text-[50px]">
        Certificates - Skills & Credibility
      </h1>
      <hr className="opacity-30 text-white" />
      {/* sertif 1 */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[32px] text-[12px]">
          Certified Secure Computer User - EC Council
        </a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Aug 2024 – Present
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* sertif 2 */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[32px] text-[12px]">
          English Score – British Council
        </a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Aug 2024 – Present
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* sertif 3 */}
      <div className="flex flex-row justify-between py-2">
        <a
          className="lg:text-[32px] text-[12px] flex flex-row
        "
        >
          Red Hat Certified System Administrator
        </a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          July 2023 – july 2026
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* sertif 4 */}
      <div className="flex flex-row justify-between py-2">
        <a className="lg:text-[32px] text-[12px]">
          IBM Front-End Web Development
        </a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Nov 2023 – Present
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* sertif 5 */}
      <div className="flex flex-row justify-between py-2">
        <a className="lg:text-[32px] text-[12px]">
          Meta Front-End Web Development
        </a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Nov 2023 – Present
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* sertif 6 */}
      <div className="flex flex-row justify-between py-2">
        <a className="lg:text-[32px] text-[12px]">IBM UI/UX Design</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Nov 2023 – Present
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* sertif 7 */}
      <div className="flex flex-row justify-between py-2">
        <a className="lg:text-[32px] text-[12px]">
          Certificate Of Achievement As Production Manager Completing JA Company
          Program
        </a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Jan 2019 – Present
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* sertif 8 */}
      <div className="flex flex-row justify-between py-2">
        <a className="lg:text-[32px] text-[12px]">
          Batam Student Company Trade Fair 2019 Participant
        </a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          Jan 2019 – Present
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
    </div>
  );
};

export default Certificate;
