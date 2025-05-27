import React, { useState } from "react";
import avatar from "../assets/Avatar.svg";

const Header = () => {
   // Local state to toggle visibility of the dropdown on small screens
  const [showDropdown, setShowDropdown] = useState(false);

    // Toggles the dropdown visibility
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

   // Handles the click event for the "Add New" button in the dropdown
  const handleAddClick = () => {
    console.log("Add button clicked");
    setShowDropdown(false);
  };

  return (
    <div className="w-full flex mt-3 justify-end px-4 py-2">
      <div className="relative flex items-center gap-2">
         {/* User Avatar - clickable to toggle dropdown on small screens */}
        <img
          src={avatar}
          alt="User avatar"
          className="w-10 h-10 bg-[#22D3DD] rounded-md object-cover cursor-pointer"
          onClick={toggleDropdown}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleDropdown()}
        />

        {/* Add Button - shown only on md+ screens */}
        <button className="hidden md:flex w-10 h-10 rounded-md bg-[#2C2156] text-white items-center justify-center">
          <i className="ri-add-line text-lg" />
        </button>

        {/* Dropdown - shown only on small screens */}
        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 w-32 bg-white border rounded-md shadow-md p-2 z-50 md:hidden">
            <button
              className="w-full text-left px-2 py-1 hover:bg-gray-100 text-sm text-gray-800 flex items-center gap-2"
              onClick={handleAddClick}
            >
              <i className="ri-add-line text-lg" />
              Add New
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
