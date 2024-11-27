// components/Header.js
import { CiSearch } from "react-icons/ci";
import { RiShutDownLine } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";

const Header = ({ toggleDropdown, isDropdownOpen }) => {
  return (
    <header className="z-50 bg-[#f7f6f9] sticky top-0 pt-8">
      <div className="flex flex-wrap items-center w-full relative tracking-wide">
        <div className="flex items-center gap-y-6 max-sm:flex-col z-50 w-full pb-2">
          <div className="flex items-center gap-4 w-full px-6 bg-white shadow-sm min-h-[48px] sm:mr-20 rounded-md outline-none border-none">
            <input type="text" placeholder="Search something..." className="w-full text-sm bg-transparent rounded outline-none" />
            <CiSearch className="text-xl" />
          </div>

          <div className="flex items-center justify-end gap-6 ml-auto">
            {/* Profile Icon with Dropdown */}
            <div className="relative flex items-center gap-4 cursor-pointer hidden sm:flex md:flex" onClick={toggleDropdown}>
              <p className="text-gray-500 text-sm">Hi, John</p>
              <Image src="https://readymadeui.com/team-1.webp" height={38} width={38} alt="profile-pic" className="rounded-full border-2 border-gray-300" />
            </div>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="dropdown-content shadow-md p-2 bg-white rounded-md absolute top-[38px] right-0 w-56 z-50">
                <div className="w-full space-y-2">
                  <a href="#" className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-[#d9f3ea] transition duration-300 ease-in-out">
                    <RiShutDownLine className="text-xl mr-2"/>
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
