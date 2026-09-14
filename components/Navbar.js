"use client";
import {MenuIcon,SearchIcon,MoonIcon,BellIcon,ChevronDownIcon,} from "./Icons";
export default function Navbar({ onMenuClick }) {
  return (
    <header
      className="fixed top-0 right-0 z-40 h-[85px] bg-white border-b border-gray-200 flex items-center justify-between px-5 lg:px-7"
      style={{
        left: "var(--sidebar-width, 315px)",
      }}>
      {/*navbar left*/}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick} className=" w-[50px] h-[50px] rounded-[10px] border border-gray-200 flex items-center justify-center text-[#667085]  hover:bg-gray-50 hover:text-[#465fff] transition" >
          <MenuIcon />
        </button>

        <div className="relative hidden sm:block w-[300px] lg:w-[465px]">

          <SearchIcon className=" absolute left-4 top-1/2 -translate-y-1/2 text-[#667085]"/>
          <input type="text" placeholder="Search or type command..."  className=" w-full h-[48px] rounded-[10px] border border-gray-200 bg-white  pl-12 pr-16 text-[14px] text-[#344054]  outline-none placeholder:text-[#98a2b3]  focus:border-[#465fff]  focus:ring-2 focus:ring-[#465fff]/10 transition "/>
        </div>
      </div>


      {/* right side*/}
      <div className="flex items-center gap-3">

        {/* Dark Mode */}
        <button
          className="  w-[50px]  h-[50px]  rounded-full  border  border-gray-200  flex  items-center  justify-center  text-[#667085]  hover:bg-gray-50  hover:text-[#465fff]  transition " >
          <MoonIcon />
        </button>


        {/* Notification */}
        <button
          className=" relative w-[50px] h-[50px] rounded-full border border-gray-200 flex items-center justify-center text-[#667085] hover:bg-gray-50  hover:text-[#465fff] transition " >
          <BellIcon />
        </button>      

          {/* Name */}
          <span className="hidden lg:block text-[14px] font-semibold text-[#101828]">
           AS
          </span>

          {/* Arrow */}
          <ChevronDownIcon />
      </div>

    </header>
  );
}





