import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-fit flex flex-col px-[40px] lg:px-[170px] text-white">
      <h1 className="lg:pt-14 pt-7 text-[18px] font-semibold lg:text-[50px]">
        Contact - Let’s Work Together!
      </h1>
      <h1 className="text-[13px] lg:text-[30px] pb-3 lg:pb-6">
        Promise you will not disappointed.
      </h1>
      <hr className="opacity-30 text-white" />
      {/* contact 1 */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[32px] text-[12px]">Email</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          rafaelyogi2093@gmail.com
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* contact 2 */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[32px] text-[12px]">Phone</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          +62 81959410214
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* contact 3 */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[32px] text-[12px]">LinkedIN</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">
          www.linkedin.com/in/hizkia-yogi-rafael
        </h1>
      </div>
      <hr className="opacity-30 text-white" />
      {/* contact 4 */}
      <div className="flex flex-row justify-between py-2 items-center">
        <a className="lg:text-[32px] text-[12px]">Instagram</a>
        <h1 className="lg:text-[20px] text-[10px] text-right">@yogi.rafael</h1>
      </div>
      <hr className="opacity-30 text-white" />
    </div>
  );
};

export default Contact;
