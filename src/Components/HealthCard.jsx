import React from "react";
const HealthCard = ({ title, icon, date, progress, color }) => {
  return (
    <div className="h-[17vh] w-[22vh] rounded-xl px-2 bg-[#F5F9FF]">
      <div className="flex items-center py-2  gap-3">
        <img className="h-8 w-8 object-cover" src={icon} alt="" />
        <span className="text-[1rem] font-semibold text-[#2F3299]">
          {title}
        </span>
      </div>
      <span className="  text-zinc-400 text-[0.7rem] font-semibold">
        Date: {date}
      </span>
      <div className="w-[90%] h-[0.4rem] bg-gray-200 rounded-full overflow-hidden mt-2">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default HealthCard;
