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
    <div className=" relative h-[80%] w-[52%] rounded-lg bg-[#F5F9FF]">
      <img className=" h-full w-[18vw]" src={anatomy} alt="anatomy" />
      <i className="ri-arrow-right-circle-line absolute top-0 right-1 text-2xl text-zinc-400 bg-[#F5F9FF]"></i>

      <HealthTag
        text="Healthy Heart"
        icon="❤️"
        style="top-[19%] right-[-25%] bg-[#2D3199]"
      />
      <HealthTag
        text="Healthy Leg"
        icon="🦵"
        style="bottom-[33%] left-[-20%] bg-[#1ADEED]"
      />

      <div className="scanner-frame absolute top-[23%] right-[28%]"></div>
      <div className="scanner-frame absolute bottom-[27%] right-[41%]"></div>
    </div>
  );
};

export default AnatomySection;
