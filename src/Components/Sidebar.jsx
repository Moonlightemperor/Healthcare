import React, { useEffect, useState } from "react";


/**
 * Sidebar Component
 * -----------------
 * A responsive sidebar for navigation in the Healthcare Dashboard.
 * Displays logo, primary navigation (General), tools section, and settings.
 * Collapsible on mobile using a hamburger menu (RiIcons used for visuals).
 */

 
const Sidebar = () => {
  // Toggle sidebar visibility on small screens
  const [isOpen, setIsOpen] = useState(false);

  // Main navigation items under "General"
  const navItems = [
    {
      icon: <i className="ri-dashboard-horizontal-fill"></i>,
      label: "Dashboard",
    },
    { icon: <i className="ri-arrow-up-down-fill"></i>, label: "History" },
    { icon: <i className="ri-calendar-2-line"></i>, label: "calender" },
    { icon: <i className="ri-add-box-fill"></i>, label: "Appointments" },
    { icon: <i className="ri-line-chart-fill"></i>, label: "Statistics" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <>
      {/* Hamburger menu for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#2C2156] text-3xl focus:outline-none"
        >
          <i className={isOpen ? "ri-close-fill" : "ri-menu-line"}></i>
        </button>
      </div>
      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 h-full flex flex-col w-[80%] tab:w-[18%] laptop:w-[17%] z-40  bg-[#EDF6FF]   md:p-[2%] p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto `}
      >
        <h1 className="text-xl md:mt-1 mt-4 font-bold py-2 ">
          <span className="text-[#00D4ED]">Health</span>
          <span className="text-[#2C2156]">care.</span>
        </h1>

        <nav className="mt-7 ">
          <h2 className="text-sm font-semibold text-zinc-400 mb-4">General</h2>
          <ul className="flex flex-col gap-5 text-[#6F6E91] text-sm laptop:text-sm tablg:text-lg font-medium">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-4 ${
                  item.label === "Dashboard"
                    ? "text-[#2B234D] font-semibold"
                    : "text-zinc-400"
                } cursor-pointer`}
              >
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mt-9">
          <h2 className="text-sm  font-semibold text-zinc-400 mb-4">Tools</h2>
          <ul className="flex flex-col gap-5 text-zinc-400 text-sm  laptop:text-sm tablg:text-lg  font-medium">
            <li className=" flex items-center gap-4">
              <i className="ri-wechat-2-fill"></i>Chat
            </li>
            <li className="flex items-center gap-4">
              <i className="ri-phone-fill"></i>Support
            </li>
          </ul>
        </nav>

        <nav className="mt-auto">
          <ul className="flex flex-col gap-5 text-zinc-400 text-sm  laptop:text-sm tablg:text-lg font-medium">
            <li className="flex items-center  gap-4">
              <i className="ri-settings-2-line"></i>Settings
            </li>
          </ul>
        </nav>
      </aside>
    {/* Backdrop overlay for mobile sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
