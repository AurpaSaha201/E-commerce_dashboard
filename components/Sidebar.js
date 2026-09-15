"use client";
import { useState } from "react";
import {LayoutDashboard,Bot,ShoppingCart,Calendar,User,ListTodo,FilePenLine,Table2,Files,PanelsTopLeft,MessageCircle,Mail,ChevronRight,Headphones,MoreHorizontal,ChartPie,MapPinned,Cuboid,Plug, ChartNoAxesColumn} from "lucide-react";
import Link from "next/link";

export default function Sidebar({ open }) {

  // Dashboard submenu
  const [dashboardOpen, setDashboardOpen] = useState(true);

  // Charts submenu
  const [chartsOpen, setChartsOpen] = useState(true);

  return (
    <aside
      className={` fixed left-0  top-0 z-50  h-screen bg-white border-r border-gray-200 transition-all duration-300  overflow-hidden
        ${open ? "w-[315px]" : "w-[100px]"}
      `}
    >

      {/* ================= LOGO ================= */}

     <div
        className={` h-[85px] flex items-center border-b border-gray-100
          ${open ? "px-6" : "justify-center"}
        `}
      >
        <div className="flex items-center gap-3">
          <div className="w-[38px] h-[38px] rounded-[9px]  bg-[#465fff] flex items-center justify-center text-white shrink-0" >
            <ChartNoAxesColumn size={22} strokeWidth={2} />
          </div>

          {/* Logo Text */}
          {open && (
            <span className=" text-[25px] font-bold text-[#101828]  tracking-tight">
              TailAdmin
            </span>
          )}
        </div>
      </div>

      {/* ================= SIDEBAR CONTENT ================= */}

      <div
        className="h-[calc(100vh-85px)] overflow-y-auto px-4 py-6"
      >

        {/* ================= MENU ================= */}

        {open && (
          <p
            className="
              text-[12px]
              font-medium
              text-[#98a2b3]
              px-2
              mb-4
            "
          >
            MENU
          </p>
        )}


        <nav className="space-y-1">

          {/* ================================================= */}
          {/* DASHBOARD */}
          {/* ================================================= */}

          <button
            onClick={() => setDashboardOpen(!dashboardOpen)}
            className={`
              group
              relative
              flex
              items-center
              w-full
              h-[50px]
              rounded-[10px]
              transition-all
              duration-200

              ${open ? "px-4 gap-4" : "justify-center"}

              bg-[#eef3ff]
              text-[#465fff]
            `}
          >

            {/* Dashboard Icon */}
            <span className="shrink-0 text-[#465fff]">
              <LayoutDashboard
                size={22}
                strokeWidth={1.8}
              />
            </span>


            {/* Dashboard Text */}
            {open && (
              <>
                <span
                  className="
                    text-[15px]
                    font-medium
                    whitespace-nowrap
                  "
                >
                  Dashboard
                </span>

                <ChevronRight
                  size={17}
                  strokeWidth={1.8}
                  className={`
                    ml-auto
                    transition-transform
                    duration-200
                    rotate-90
                  `}
                />
              </>
            )}

          </button>


          {/* ================================================= */}
          {/* DASHBOARD SUBMENU */}
          {/* ================================================= */}

          {open && dashboardOpen && (
            <div className="ml-[44px] space-y-1 py-1">

              <SubMenuItem
                text="Ecommerce"
                active
              />

              <SubMenuItem
                text="Analytics"
              />

              <SubMenuItem
                text="Marketing"
              />

              <SubMenuItem
                text="CRM"
              />

              <SubMenuItem
                text="Stocks"
              />

              <SubMenuItem
                text="SaaS"
              />

              <SubMenuItem
                text="Logistics"
              />

              <SubMenuItem
                text="AI"
                badge="NEW"
              />

              <SubMenuItem
                text="Sales"
                badge="NEW"
              />

              <SubMenuItem
                text="Finance"
                badge="NEW"
              />

            </div>
          )}


          {/* ================================================= */}
          {/* AI ASSISTANT */}
          {/* ================================================= */}

          <SidebarItem
            open={open}
            href="#"
            icon={<Bot size={22} strokeWidth={1.7} />}
            text="AI Assistant"
            badge="NEW"
            arrow
          />


          {/* ================================================= */}
          {/* E-COMMERCE */}
          {/* ================================================= */}

          <SidebarItem
            open={open}
            href="#"
            icon={<ShoppingCart size={22} strokeWidth={1.7} />}
            text="E-commerce"
            arrow
          />


          {/* Calendar */}

          <SidebarItem
            open={open}
            href="#"
            icon={<Calendar size={22} strokeWidth={1.7} />}
            text="Calendar"
          />


          {/* User Profile */}

          <SidebarItem
            open={open}
            href="#"
            icon={<User size={22} strokeWidth={1.7} />}
            text="User Profile"
          />


          {/* Task */}

          <SidebarItem
            open={open}
            href="#"
            icon={<ListTodo size={22} strokeWidth={1.7} />}
            text="Task"
            arrow
          />


          {/* Forms */}

          <SidebarItem
            open={open}
            href="#"
            icon={<FilePenLine size={22} strokeWidth={1.7} />}
            text="Forms"
            arrow
          />


          {/* Tables */}

          <SidebarItem
            open={open}
            href="#"
            icon={<Table2 size={22} strokeWidth={1.7} />}
            text="Tables"
            arrow
          />


          {/* Pages */}

          <SidebarItem
            open={open}
            href="#"
            icon={<Files size={22} strokeWidth={1.7} />}
            text="Pages"
            arrow
          />


          {/* Layouts */}

          <SidebarItem
            open={open}
            href="#"
            icon={<PanelsTopLeft size={22} strokeWidth={1.7} />}
            text="Layouts"
            badge="NEW"
            arrow
          />

        </nav>


        {/* ================= SUPPORT ================= */}

        {open && (
          <p
            className="
              text-[12px]
              font-medium
              text-[#98a2b3]
              px-2
              mt-10
              mb-4
            "
          >
            SUPPORT
          </p>
        )}


        <nav className="space-y-1">

          <SidebarItem
            open={open}
            href="#"
            icon={<MessageCircle size={22} strokeWidth={1.7} />}
            text="Chat"
          />

          <SidebarItem
            open={open}
            href="#"
            icon={<Headphones size={22} strokeWidth={1.7} />}
            text="Support Ticket"
            badge="NEW"
            arrow
          />

          <SidebarItem
            open={open}
            href="#"
            icon={<Mail size={22} strokeWidth={1.7} />}
            text="Email"
            arrow
          />

        </nav>


        {/* ================= OTHERS ================= */}

        {open && (
          <p
            className="
              text-[12px]
              font-medium
              text-[#98a2b3]
              px-2
              mt-10
              mb-4
            "
          >
            OTHERS
          </p>
        )}


        <nav className="space-y-1">


          {/* ================================================= */}
          {/* CHARTS */}
          {/* ================================================= */}

          <button
            onClick={() => setChartsOpen(!chartsOpen)}
            className={`
              group
              relative
              flex
              items-center
              w-full
              h-[50px]
              rounded-[10px]
              transition-all
              duration-200

              ${open ? "px-4 gap-4" : "justify-center"}

              ${
                chartsOpen
                  ? "bg-[#eef3ff] text-[#465fff]"
                  : "text-[#344054] hover:bg-gray-50"
              }
            `}
          >

            <span
              className={
                chartsOpen
                  ? "text-[#465fff]"
                  : "text-[#667085]"
              }
            >
              <ChartPie
                size={22}
                strokeWidth={1.7}
              />
            </span>


            {open && (
              <>
                <span
                  className="
                    text-[15px]
                    font-medium
                  "
                >
                  Charts
                </span>


                {/* NEW Badge */}

                <span
                  className="
                    ml-auto
                    text-[11px]
                    font-medium
                    text-[#12b76a]
                    bg-[#ecfdf3]
                    px-2.5
                    py-1
                    rounded-full
                  "
                >
                  NEW
                </span>


                <ChevronRight
                  size={17}
                  strokeWidth={1.8}
                  className={`
                    transition-transform
                    duration-200
                    ${
                      chartsOpen
                        ? "rotate-90 text-[#465fff]"
                        : "text-[#667085]"
                    }
                  `}
                />

              </>
            )}

          </button>


          {/* ================================================= */}
          {/* CHART SUBMENU */}
          {/* ================================================= */}

          {open && chartsOpen && (
            <div className="ml-[44px] space-y-1 py-1">

              <SubMenuItem text="Line Chart" />
              <SubMenuItem text="Bar Chart" />
              <SubMenuItem text="Pie Chart" />
              <SubMenuItem text="Radar Chart" />
              <SubMenuItem text="Radial Chart" />

            </div>
          )}


          {/* ================================================= */}
          {/* MAPS */}
          {/* ================================================= */}

          <SidebarItem
            open={open}
            href="#"
            icon={
              <MapPinned
                size={22}
                strokeWidth={1.7}
              />
            }
            text="Maps"
            badge="NEW"
            arrow
          />


          {/* ================================================= */}
          {/* UI ELEMENTS */}
          {/* ================================================= */}

          <SidebarItem
            open={open}
            href="#"
            icon={
              <Cuboid
                size={22}
                strokeWidth={1.7}
              />
            }
            text="UI Elements"
            arrow
          />


          {/* ================================================= */}
          {/* AUTHENTICATION */}
          {/* ================================================= */}

          <SidebarItem
            open={open}
            href="#"
            icon={
              <Plug
                size={22}
                strokeWidth={1.7}
              />
            }
            text="Authentication"
            arrow
          />


          {/* More */}

          <SidebarItem
            open={open}
            href="#"
            icon={
              <MoreHorizontal
                size={22}
                strokeWidth={1.7}
              />
            }
            text=""
          />

        </nav>

      </div>

    </aside>
  );
}


/* ========================================================= */
/* SIDEBAR ITEM */
/* ========================================================= */

function SidebarItem({
  open,
  href,
  icon,
  text,
  active = false,
  arrow = false,
  badge = null,
}) {

  return (
    <Link
      href={href}
      className={`
        group
        relative
        flex
        items-center
        h-[44px]
        rounded-[9px]
        transition-all
        duration-200

        ${open ? "px-4 gap-4" : "justify-center"}

        ${
          active
            ? "bg-[#eef3ff] text-[#465fff]"
            : "text-[#344054] hover:bg-gray-50"
        }
      `}
    >

      {/* Icon */}

      <span
        className={`
          shrink-0

          ${
            active
              ? "text-[#465fff]"
              : "text-[#667085] group-hover:text-[#465fff]"
          }
        `}
      >
        {icon}
      </span>


      {/* Text */}

      {open && (
        <>
          <span
            className="
              text-[15px]
              font-medium
              whitespace-nowrap
            "
          >
            {text}
          </span>


          {/* Badge */}

          {badge && (
            <span
              className="
                ml-auto
                text-[11px]
                font-medium
                text-[#12b76a]
                bg-[#ecfdf3]
                px-2.5
                py-1
                rounded-full
              "
            >
              {badge}
            </span>
          )}


          {/* Arrow */}

          {arrow && (
            <ChevronRight
              size={17}
              strokeWidth={1.8}
              className="
                ml-auto
                text-[#667085]
              "
            />
          )}

        </>
      )}

    </Link>
  );
}


/* ========================================================= */
/* SUB MENU ITEM */
/* ========================================================= */

function SubMenuItem({
  text,
  active = false,
  badge = null,
}) {

  return (
    <Link
      href="#"
      className={`
        flex
        items-center
        min-h-[40px]
        rounded-[9px]
        px-4
        text-[15px]
        font-medium
        transition-all

        ${
          active
            ? "bg-[#eef3ff] text-[#465fff]"
            : "text-[#344054] hover:bg-gray-50"
        }
      `}
    >

      <span>{text}</span>


      {badge && (
        <span
          className="
            ml-auto
            text-[11px]
            font-medium
            text-[#12b76a]
            bg-[#ecfdf3]
            px-2.5
            py-1
            rounded-full
          "
        >
          {badge}
        </span>
      )}

    </Link>
  );
}




