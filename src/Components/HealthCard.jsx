import React from "react";
/**
 * HealthCard Component
 *
 * Reusable card to display a health-related metric with:
 * - Icon
 * - Title
 * - Date
 * - Progress bar (with dynamic percentage and color)
 *
 * Props:
 * - title: string – Label for the metric (e.g., "Heart Rate")
 * - icon: string (URL) – Path to the icon image
 * - date: string – Date string to show under the title
 * - progress: number – Percentage of progress to visually render
 * - color: string – Color of the progress bar
 */

const HealthCard = ({ title, icon, date, progress, color }) => {
  return (
    <div className="laptop:h-[17vh] tablg:h-[120px] pro7:h-[8vh] tab:w-[130px] tablg:w-[150px] tab:h-[10vh] h-[90px] laptop:w-[22vh] w-[130px] rounded-xl px-2 bg-[#F5F9FF]">
        {/* Header section with icon and title */}
      <div className="flex items-center py-2  gap-3">
        <img className="h-8 w-8 object-cover" src={icon} alt={`${title} icon`} />
        <span className="text-[1rem] laptop:text-[1rem] pro7:text-[1.2rem] tablg:text-[1.2rem] font-semibold text-[#2F3299]">
          {title}
        </span>
      </div>
      <span className="  text-zinc-400 text-[0.7rem] laptop:text-[0.7rem] tablg:text-[0.9rem] pro7:text-[1rem] font-semibold">
        Date: {date}
      </span>
      {/* Progress bar section */}
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
