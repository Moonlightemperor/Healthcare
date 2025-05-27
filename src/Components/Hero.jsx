import React from "react";
import Dashboardleft from "./Dashboardleft";
import DashboardRight from "./DashboardRight";


/**
 * Hero Component
 *
 * Acts as the main container for the dashboard's core content.
 * Composed of two major sections: Dashboardleft and DashboardRight.
 * Positioned to the right of the Sidebar on medium+ screen sizes.
 */

const Hero = () => {
  return (
    <>
      {/* Main content wrapper shifted to the right to accommodate sidebar */}
      <div className="md:w-[83%]   overflow-x-hidden   md:ml-[17%]  p-1 ">
        {/* Responsive layout for inner dashboard sections:
            - Row layout on large screens (laptop)
            - Column layout on smaller screens (tab)
        */}
        <div className="md:flex laptop:flex-row tab:flex-col">
          <Dashboardleft />
          <DashboardRight />
        </div>
      </div>
    </>
  );
};

export default Hero;
