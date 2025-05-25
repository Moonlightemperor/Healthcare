import React, { useState } from "react";
import SearchBar from "./SearchBar";
import avatar from "../assets/Avatar.svg";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="w-full flex mt-3 justify-end mr-0 px-4 py-2">
      <div className="flex items-center min-w-[50px] md:ml-0 ml-[-25%]  gap-2">
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 bg-[#22D3DD] rounded-md object-cover"
          onClick={() => setShowDropdown(!showDropdown)}
        />

         {/* Add Button - shown only on md+ screens */}
         <button className="hidden md:flex w-10 h-10 rounded-md bg-[#2C2156] text-white items-center justify-center">
          <i className="ri-add-line text-lg"></i>
        </button>

        {/* Dropdown on small screens */}
        {showDropdown && (
          <div className="absolute top-18 right-[-5%] w-32 bg-white border rounded-md shadow-md p-2 z-50 md:hidden">
            <button
              className="w-full text-left px-2 py-1 hover:bg-gray-100 text-sm text-gray-800 flex items-center gap-2"
              onClick={() => {
                setShowDropdown(false);
                console.log("Add button clicked");
              }}
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
