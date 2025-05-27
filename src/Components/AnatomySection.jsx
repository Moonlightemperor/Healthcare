import React from "react";
import anatomy from "../assets/Anatomy2.png";
const AnatomySection = () => {
  const HealthTag = ({ text, icon, style }) => (
    <div
      className={`absolute ${style} flex items-center gap-1 text-sm px-3 py-2 rounded-md text-white font-semibold shadow-md `}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
  return (
    <div className=" relative laptop:w-[290px] laptop:h-[80%] md:w-[290px] tablg:w-[330px] rounded-lg bg-[#F5F9FF]">
      <img
        className=" h-[100%]  laptop:w-[19vw]  tab:w-[32vw]"
        src={anatomy}
        alt="anatomy"
      />
      <i className="ri-arrow-right-circle-line absolute top-0 right-1 text-2xl text-zinc-400 bg-[#F5F9FF]"></i>

      <HealthTag
        text="Healthy Heart"
        icon="❤️"
        style="md:top-[19%] top-[20%]  pro:right-[-4%] right-[-12%] duo:right-[17%] md:right-[-10%] laptop:right-[-3%] tablg:right-[-3%]  bg-[#2D3199]"
      />
      <HealthTag
        text="Healthy Leg"
        icon="🦵"
        style="md:bottom-[31%] bottom-[32%] left-[-10%] pro:left-[0%] md:left-[-15%] tablg:left-[-6%] duo:left-[4%] duo:bottom-[32%] laptop:bottom-[33%] laptop:left-[-16%] left-[-9%] bg-[#1ADEED]"
      />

      <div className="scanner-frame absolute top-[23%] duo:right-[44%] md:right-[32%] laptop:right-[38%] right-[30%]"></div>
      <div className="scanner-frame  absolute md:bottom-[27%] laptop:left-[36%] duo:left-[37%]  bottom-[28%] md:left-[37%] pro7:left-[43%] tablg:left-[43%] left-[43%]"></div>
    </div>
  );
};

export default AnatomySection;
