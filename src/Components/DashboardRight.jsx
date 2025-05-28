import React from "react";
import Header from "./Header";
import RightCalendarSection from "./Calender";
import Appointments from "./Appointments";
import { appointments } from "../Data/AppointmentsData";
import Schedule from "./Schedule";
// bg-[#F5F9FF]


/**
 * DashboardRight Component
 *
 * This is the right-side section of the dashboard layout.
 * It includes:
 * - A header with user/account utilities
 * - A calendar view
 * - A list of upcoming appointments (rendered from mock data)
 * - A schedule of future events
 *
 * Props:
 * - None (uses imported mock data and static layout)
 */

const DashboardRight = () => {
  return (
    <div className="md:w-[47%] tab:w-full laptop:py-20 laptop:w-[47%] rounded-lg p-3 h-full bg-[#F5F9FF]">
   
      <RightCalendarSection />
        {/* Appointments list (scrollable row of appointment cards) */}
      <div className="flex gap-4 w-full">
        {appointments.map((item, id) => (
          
          <Appointments
            key={id}
            icon={item.icon}
            title={item.title}
            time={item.time}
            doctor={item.doctor}
            bgColor={item.bgColor}
            textColor={item.textColor}
          />
        ))}
      </div>
     {/* Upcoming schedule for the user */}
      <Schedule />
    </div>
  );
};

export default DashboardRight;
