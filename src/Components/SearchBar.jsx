import React from "react";


/**
 * SearchBar Component
 *
 * This component renders a search input field with an accompanying notification icon.
 * It's designed to be responsive and integrates well in a top bar or dashboard layout.
 */


const SearchBar = () => {
  return (
      // Main container: holds search input and notification icon
    <div className="flex items-center h-[6vh] w-full md:mt-3   gap-4 md:gap-3 px-4">

         {/* Search Input Box */}
      <div className="ml-6 md:ml-[-6%]  md:w-full w-[70%] laptop:h-[7vh] h-[6vh] flex items-center px-4 border border-zinc-200 rounded-md bg-white">
        <i className="ri-search-line text-[#2C2156] text-xl"></i>
         {/* Input Field */}
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="flex-1 ml-2 p-2 bg-transparent outline-none border-none text-base text-zinc-800 placeholder:text-zinc-500"
        />
      </div>
  {/* Notification Icon Box */}
      <div
        className=" w-11 h-11  md:w-16 md:h-16 lg:w-12 lg:h-12 flex border border-zinc-200  items-center justify-center rounded-md bg-white"
        aria-label="Notifications"
      >
        <i className="ri-notification-4-fill text-[#2C2156] text-xl"></i>
      </div>
    </div>
  );
};

export default SearchBar;
