"use client";
import { useState } from "react";
import Link from "next/link";
import {ChevronRight,ChartNoAxesColumn,} from "lucide-react";
import { menuItems,supportItems,otherItems} from "./sidebarData";


export default function Sidebar({ open }) {
{/*open hocce sidebar open */}
  return (
    <aside
      className={`fixed left-0 top-0 z-50  h-screen bg-white border-r border-gray-200 transition-all  duration-300 overflow-hidden
        ${open ? "w-[315px]" : "w-[100px]"}
      `}>
      {/* logo */}

      <div
        className={`h-[85px] flex items-center border-b border-gray-100
          ${open ? "px-6" : "justify-center"}
        `}
      >
        <div className="flex items-center gap-3">
          <div className="w-[38px] h-[38px]  rounded-[9px]  bg-[#465fff] flex items-center justify-center  text-white shrink-0 " >
            <ChartNoAxesColumn size={22} strokeWidth={2} />
          </div>

          {open && (
            <span className="text-[25px] font-bold text-[#101828] tracking-tight  whitespace-nowrap ">
              TailAdmin
            </span>
          )}
        </div>
      </div>


      {/*  SIDEBAR CONTENT*/}
     <div className={`h-[calc(100vh-85px)] overflow-y-auto py-6
        ${open ? "px-4" : "px-8"}
        `}
        >

        {/* menu title false hole menu dekhabe nah */}
        {open && (<SectionTitle title="MENU"first />)}
        {/* menu item */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <SidebarItem key={item.title} 
            item={item} 
            open={open}  
            
            />
          ))}
        </nav>


        {/* support */}
        {open && (<SectionTitle title="SUPPORT" /> )}
        {/* support item */}
        <nav className="space-y-1">
          {supportItems.map((item) => (
            <SidebarItem
              key={item.title}
              item={item}
              open={open}
            />

          ))}
        </nav>


        {/*other*/}
        {open && ( <SectionTitle title="OTHERS" />)}
        {/*other item*/}
        <nav className="space-y-1">
          {otherItems.map((item) => (
            <SidebarItem
              key={item.title}
              item={item}
              open={open}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}

/* section title*/
function SectionTitle({ title,first = false}) {
  return (
    <p className={` text-[12px]font-medium text-[#98a2b3]  px-2  mb-4
        ${first ? "mt-0" : "mt-10"}`}>
      {title}
    </p>
  );
}

/* sidebar item */
function SidebarItem({ item, open }) {
  const [isOpen, setIsOpen] = useState(false);/*open and close dekhabe*/ 
  const Icon = item.icon;
  const hasChildren =item.children && item.children.length > 0;/*dashboard submenu ace 3-4 ta,submenu na thakle haschildren false */

  return (
    <div>
      <div className={` group relative flex items-center min-h-[44px]  rounded-[9px] transition-all duration-200
          ${open ? "px-4 gap-3"  : "justify-center" }
          ${isOpen && hasChildren ? "bg-[#eef3ff] text-[#465fff]" : "text-[#344054] hover:bg-gray-50" } `}
      >

        {/* ICON + TITLE LINK */}

        <Link  href={item.href || "#"} className=" flex items-center gap-4  flex-1 min-w-0  h-[44px] ">
          {Icon && (
            <span
              className={` shrink-0 w-[24px] flex justify-center
                ${isOpen && hasChildren ? "text-[#465fff]" : "text-[#667085] group-hover:text-[#465fff]"}
              `}
            >
              <Icon size={22} strokeWidth={1.7} /> {/*icon line thin*/}
            </span>
          )}

          {/* TITLE */}

          {open && (
            <span className="text-[15px] font-medium  whitespace-nowrap " >
              {item.title}
            </span>
          )}

        </Link>


        {/* BADGE */}

        {open && item.badge && (
          <span className=" text-[11px] font-medium text-[#12b76a]  bg-[#ecfdf3] px-2.5  py-1 rounded-full shrink-0 ">
            {item.badge}
          </span>
        )}


        {/* ARROW */}

        {open && (
          <>
            {hasChildren && (
              <button type="button" onClick={() =>  setIsOpen(!isOpen) } className=" flex items-center justify-center ml-1 shrink-0">
                <ChevronRight size={18}  strokeWidth={1.8} className={` transition-transform  duration-200
                    ${ isOpen? "rotate-90 text-[#465fff]" : "text-[#667085]" }
                  `}
                />
              </button>
            )}
            {!hasChildren && item.arrow && (
              <ChevronRight size={18} strokeWidth={1.8} className=" text-[#667085] shrink-0"/>
            )}
          </>
        )}

      </div>


      {/* CHILDREN */}

      {open &&isOpen && hasChildren && (
       <div className="  ml-[44px]  space-y-1  py-1">
            {item.children.map((child) => (
              <SidebarChild key={child.title}  item={child}
              />
            ))}
          </div>
        )}
    </div>
  );
}


/*sidebar child */

function SidebarChild({ item }) {

  return (
    <Link href={item.href} className={`flex items-center  min-h-[40px]  rounded-[9px]  px-4  transition-all  duration-200
        ${ item.active ? ` bg-[#eef3ff] text-[#465fff]`: ` text-[#344054] hover:bg-gray-50 hover:text-[#465fff] ` }`}>

      {/* TITLE */}

      <span  className=" text-[15px] font-medium whitespace-nowrap ">
        {item.title}
      </span>


      {/* BADGE */}

      {item.badge && (
        <span
          className="ml-auto text-[11px] font-medium text-[#12b76a] bg-[#ecfdf3] px-2.5 py-1 rounded-full"
        >
          {item.badge}
        </span>
      )}

    </Link>
  );
}