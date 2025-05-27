import React from 'react'
import { schedule } from '../Data/Schedule'

/**
 * Schedule Component
 *
 * Displays a list of upcoming schedule items grouped by day.
 * Each day contains one or more events with a title, icon, and time.
 * Uses data imported from a local module.
 */


const Schedule = () => {
  return (
    <div className="mt-6 ">
        {/* Section Heading */}
    <h2 className="text-lg laptop:text-lg tablg:text-xl pro7:text-xl font-bold text-[#2F329B] mb-4">The Upcoming Schedule</h2>
      {/* Loop through days and their events */}
    {schedule.map((day, i) => (
      <div key={i} className="mb-4 ">
        <p className="text-gray-500 text-sm laptop:text-sm tablg:text-lg pro7:text-lg mb-2">{day.day}</p>
         {/* Events under the day */}
        <div className="flex flex-wrap gap-4">
          {day.events.map((event, j) => (
            <div
              key={j}
              className="bg-[#D7DEF7] rounded-2xl  px-5 py-4  min-w-[180px] flex flex-col justify-between"
            >
               {/* Event title and icon */}
              <div className="flex justify-between items-center font-semibold gap-2 mb-2 mt-2 text-[#2F329B] text-sm laptop:text-sm tablg:text-lg pro7:text-lg">
                <span>{event.title}</span>
                <span>{event.icon}</span>
              </div>

               {/* Event time */}
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
