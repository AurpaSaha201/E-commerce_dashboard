"use client";
import {MenuIcon,SearchIcon,MoonIcon,BellIcon,ChevronDownIcon,} from "./Icons";
export default function Navbar({ onMenuClick }) {
  return (
    <header
      className="fixed top-0 right-0 z-40 h-[85px] bg-white border-b border-gray-200 flex items-center justify-between px-5 lg:px-7"
      style={{
        left: "var(--sidebar-width, 315px)",
      }}>
      {/* ================= LEFT ================= */}
      <div className="flex items-center gap-4">

        {/* Menu Button */}
        <button
          onClick={onMenuClick}
          className="
            w-[50px]
            h-[50px]
            rounded-[10px]
            border
            border-gray-200
            flex
            items-center
            justify-center
            text-[#667085]
            hover:bg-gray-50
            hover:text-[#465fff]
            transition
          "
        >
          <MenuIcon />
        </button>

        {/* Search */}
        <div className="relative hidden sm:block w-[300px] lg:w-[465px]">

          <SearchIcon
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[#667085]
            "
          />

          <input
            type="text"
            placeholder="Search or type command..."
            className="
              w-full
              h-[48px]
              rounded-[10px]
              border
              border-gray-200
              bg-white
              pl-12
              pr-16
              text-[14px]
              text-[#344054]
              outline-none
              placeholder:text-[#98a2b3]
              focus:border-[#465fff]
              focus:ring-2
              focus:ring-[#465fff]/10
              transition
            "
          />

        </div>

      </div>


      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-3">

        {/* Dark Mode */}
        <button
          className="
            w-[50px]
            h-[50px]
            rounded-full
            border
            border-gray-200
            flex
            items-center
            justify-center
            text-[#667085]
            hover:bg-gray-50
            hover:text-[#465fff]
            transition
          "
        >
          <MoonIcon />
        </button>


        {/* Notification */}
        <button
          className="
            relative
            w-[50px]
            h-[50px]
            rounded-full
            border
            border-gray-200
            flex
            items-center
            justify-center
            text-[#667085]
            hover:bg-gray-50
            hover:text-[#465fff]
            transition
          "
        >
          <BellIcon />

          {/* Notification Dot */}
          <span
            className="
              absolute
              right-[9px]
              top-[7px]
              w-[9px]
              h-[9px]
              rounded-full
              bg-[#f97066]
              border-2
              border-white
            "
          />
        </button>


        {/* Profile */}
        <button
          className="
            flex
            items-center
            gap-3
            ml-2
            pl-1
            hover:opacity-80
            transition
          "
        >

          {/* Profile Image */}
          <div
            className="
              w-[44px]
              h-[44px]
              rounded-full
              overflow-hidden
              bg-[#eef2ff]
              flex
              items-center
              justify-center
            "
          >
            <div className="w-full h-full flex items-end justify-center">
              <span className="text-[22px]">👨🏻</span>
            </div>
          </div>

          {/* Name */}
          <span className="hidden lg:block text-[14px] font-semibold text-[#101828]">
            Musharof
          </span>

          {/* Arrow */}
          <ChevronDownIcon />

        </button>

      </div>

    </header>
  );
}





