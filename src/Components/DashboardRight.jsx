import React from "react";
import Header from "./Header";
import RightCalendarSection from "./Calender";
import Appointments from "./Appointments";
import { appointments } from "../Data/AppointmentsData";
import Schedule from "./Schedule";
// bg-[#F5F9FF]
const DashboardRight = () => {
  return (
    <div className="w-[47%] rounded-lg p-3   h-full bg-[#F5F9FF]">
      <Header />
      <RightCalendarSection />
      <div className="flex gap-4 w-full">
        {appointments.map((item, id) => (
          <Appointments
            key={id}
            icon={item.icon}
            title={item.title}
            time={item.time}
            doctor={item.doctor}
            bgColor={id === 1 ? "#D7DEF7" : "#2F329B"}
            textColor={id === 1 ? "#2F329B" : "#fff"}
          />
        ))}
      </div>

      <Schedule/>
    </div>
  );
};

export default DashboardRight;
