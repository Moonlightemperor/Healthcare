import React from "react";
import AnatomySection from "./AnatomySection";
import HealthCard from "./HealthCard";
import healthData from "../Data/HealthData";
import Activity from "./Activity";
import activityData from '../Data/ActivityData'
import SearchBar from "./SearchBar";

const Dashboardleft = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mb-2 mt-3 xl:w-[55%] px-4">
      <div className="w-full  mb-2 ">
      <SearchBar />
      </div>
      <div className="w-full mt-5 flex justify-between items-center">
        <h1 className="font-bold  text-2xl text-[#2E3479]">Dashboard</h1>
        <h3 className="text-sm text-[#2E3479]  ">
          This week <i className="ri-arrow-down-s-line text-[#2E3479]"></i>
        </h3>
      </div>
      <div  className="w-full md:flex justify-between items-start p-5 gap-6">
        <AnatomySection />

        <div className="flex mt-3  flex-wrap md:flex-col gap-4">
          {healthData.map((item, index) => (
            <HealthCard
              key={index}
              title={item.title}
              icon={item.icon}
              date={item.date}
              progress={item.progress}
              color={item.color}
            />
          ))}

          <span className="text-sm  text-[#2F3299] flex justify-end gap-2 items-center">
            Details <i className="ri-arrow-right-line"></i>
          </span>
        </div>
      </div>
      <div className=" md:w-full ">
       <Activity data = {activityData}/>
      </div>

    </div>
  );
};

export default Dashboardleft;
