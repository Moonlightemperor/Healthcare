import React from 'react'
import { schedule } from '../Data/Schedule'
const Schedule = () => {
  return (
    <div className="mt-6 ">
    <h2 className="text-lg laptop:text-lg tablg:text-xl pro7:text-xl font-bold text-[#2F329B] mb-4">The Upcoming Schedule</h2>
    {schedule.map((day, i) => (
      <div key={i} className="mb-4 ">
        <p className="text-gray-500 text-sm laptop:text-sm tablg:text-lg pro7:text-lg mb-2">{day.day}</p>
        <div className="flex flex-wrap gap-4">
          {day.events.map((event, j) => (
            <div
              key={j}
              className="bg-[#D7DEF7] rounded-2xl  px-5 py-4  min-w-[180px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center font-semibold gap-2 mb-2 mt-2 text-[#2F329B] text-sm laptop:text-sm tablg:text-lg pro7:text-lg">
                <span>{event.title}</span>
                <span>{event.icon}</span>
              </div>
              <span className="text-xs laptop:text-xs tablg:text-lg pro7:text-lg font-semibold text-[#2F329B]">{event.time}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  )
}

export default Schedule
