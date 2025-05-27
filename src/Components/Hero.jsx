import React from "react";
import Dashboardleft from "./Dashboardleft";
import DashboardRight from "./DashboardRight";

const Hero = () => {
  return (
    <>
      <div className="md:w-[83%]   overflow-x-hidden   md:ml-[17%]  p-1 ">
        <div className="md:flex laptop:flex-row tab:flex-col">
          <Dashboardleft />
          <DashboardRight />
        </div>
      </div>
    </>
  );
};

export default Hero;
