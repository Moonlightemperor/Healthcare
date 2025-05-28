import React from "react";
import Dashboardleft from "./Dashboardleft";
import DashboardRight from "./DashboardRight";
import Header from "./Header";



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
      <div className="md:w-[83%] tablg:w-full relative  overflow-x-hidden   md:ml-[17%]  p-1 ">
        {/* Responsive layout for inner dashboard sections:
            - Row layout on large screens (laptop)
            - Column layout on smaller screens (tab)
        */}
 <div className="absolute laptop:top-0 laptop:right-0 md:top-4 md:right-[-2%] top-1 right-[-2%] ">
 <Header />
 </div>
          
        <div className="md:flex laptop:flex-row tab:flex-col">
          <Dashboardleft />
          <DashboardRight />
        </div>
      </div>
    </>
  );
};

export default Hero;
