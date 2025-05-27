// src/components/Activity.js
import React from 'react';

const Activity = ({ data }) => {
  return (
    <div className="bg-[#F5F9FF] rounded-lg p-5 w-full">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[1rem] laptop:text-[1rem] pro7:text-[1.2rem] tablg:text-[1.2rem] font-semibold text-[#2F3299]">Activity</span>
        <span className="text-sm laptop:text-sm pro7:text-lg tablg:text-lg text-gray-500">3 appointments this week</span>
      </div>

      <div className="flex justify-between items-end h-[100px] w-full">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <div className="flex gap-[3px] items-end h-[80px]">
              {item.bars.map((height, i) => {
                const colors = ['#C4C4C4', '#3F3D56', '#00C8FF'];
                return (
                  <div
                    key={i}
                    className="w-[4px] rounded transition-all duration-300"
                    style={{
                      height: `${height}%`,
                      backgroundColor: colors[i % colors.length],
                    }}
                  ></div>
                );
              })}
            </div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
