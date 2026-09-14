/*"use client";

import Link from "next/link";

export default function Sidebar({ open }) {
  return (
    <aside
      className={`
        fixed
        left-0
        top-0
        z-50
        h-screen
        bg-white
        border-r
        border-gray-200
        transition-all
        duration-300
        overflow-hidden
        ${open ? "w-[315px]" : "w-[100px]"}
      `}
    >
   
      <div
        className={`
          h-[85px]
          flex
          items-center
          border-b
          border-gray-100
          ${open ? "px-6" : "justify-center"}
        `}
      >
        <div className="flex items-center gap-3">

  
          <div
            className="
              w-[38px]
              h-[38px]
              rounded-[9px]
              bg-[#465fff]
              flex
              items-center
              justify-center
              text-white
              shrink-0
            "
          >
            <LogoIcon />
          </div>

    
          {open && (
            <span className="text-[25px] font-bold text-[#101828] tracking-tight">
              TailAdmin
            </span>
          )}

        </div>
      </div>

      <div className="h-[calc(100vh-85px)] overflow-y-auto px-4 py-6">


        {open && (
          <p className="text-[12px] font-medium text-[#98a2b3] px-2 mb-4">
            MENU
          </p>
        )}

        <nav className="space-y-1">

   
          <SidebarItem
            open={open}
            href="/"
            icon={<GridIcon />}
            text="Dashboard"
            active
            arrow
          />

        
          <SidebarItem
            open={open}
            href="#"
            icon={<RobotIcon />}
            text="AI Assistant"
            badge="NEW"
            arrow
          />

      
          <SidebarItem
            open={open}
            href="#"
            icon={<CartIcon />}
            text="E-commerce"
            arrow
          />

      
          <SidebarItem
            open={open}
            href="#"
            icon={<CalendarIcon />}
            text="Calendar"
          />

       
          <SidebarItem
            open={open}
            href="#"
            icon={<UserIcon />}
            text="User Profile"
          />

      
          <SidebarItem
            open={open}
            href="#"
            icon={<TaskIcon />}
            text="Task"
            arrow
          />

      
          <SidebarItem
            open={open}
            href="#"
            icon={<FormIcon />}
            text="Forms"
            arrow
          />

        
          <SidebarItem
            open={open}
            href="#"
            icon={<TableIcon />}
            text="Tables"
            arrow
          />

      
          <SidebarItem
            open={open}
            href="#"
            icon={<PagesIcon />}
            text="Pages"
            arrow
          />

        
          <SidebarItem
            open={open}
            href="#"
            icon={<LayoutIcon />}
            text="Layouts"
            badge="NEW"
            arrow
          />

        </nav>

     
        {open && (
          <p className="text-[12px] font-medium text-[#98a2b3] px-2 mt-10 mb-4">
            SUPPORT
          </p>
        )}

        <nav className="space-y-1">

          <SidebarItem
            open={open}
            href="#"
            icon={<ChatIcon />}
            text="Chat"
          />

          <SidebarItem
            open={open}
            href="#"
            icon={<HeadphoneIcon />}
            text="Support Ticket"
            badge="NEW"
            arrow
          />

          <SidebarItem
            open={open}
            href="#"
            icon={<MailIcon />}
            text="Email"
            arrow
          />

        </nav>

        {open && (
          <p className="text-[12px] font-medium text-[#98a2b3] px-2 mt-10 mb-4">
            OTHERS
          </p>
        )}

        <nav className="space-y-1">

          <SidebarItem
            open={open}
            href="#"
            icon={<MoreIcon />}
            text=""
          />

        </nav>

      </div>
    </aside>
  );
}




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

     
      {open && (
        <>
          <span className="text-[15px] font-medium whitespace-nowrap">
            {text}
          </span>

       
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

         
          {arrow && (
            <ChevronIcon
              className={`
                ml-auto
                transition-transform
                ${
                  active
                    ? "text-[#465fff]"
                    : "text-[#667085]"
                }
              `}
            />
          )}
        </>
      )}
    </Link>
  );
}




function LogoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" y1="17" x2="6" y2="11" />
      <line x1="12" y1="17" x2="12" y2="7" />
      <line x1="18" y1="17" x2="18" y2="4" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
}

function RobotIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="7" width="16" height="13" rx="3" />
      <path d="M12 3v4" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
      <path d="M9 17h6" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M3 4h2l2.5 11h10l3-8H6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="4" y1="10" x2="20" y2="10" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="8" r="3.5" />
      <circle cx="12" cy="12" r="9" />
      <path d="M6.5 19c1-3 3-4.5 5.5-4.5s4.5 1.5 5.5 4.5" />
    </svg>
  );
}

function TaskIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="16" y2="13" />
    </svg>
  );
}

function TableIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="10" y1="4" x2="10" y2="20" />
    </svg>
  );
}

function PagesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="6" y="4" width="13" height="16" rx="2" />
      <path d="M6 8H4v12a2 2 0 0 0 2 2h10" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="9" y1="9" x2="9" y2="20" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-5.5A7.5 7.5 0 1 1 20 11.5Z" />
      <circle cx="8.5" cy="11.5" r=".7" fill="currentColor" />
      <circle cx="12" cy="11.5" r=".7" fill="currentColor" />
      <circle cx="15.5" cy="11.5" r=".7" fill="currentColor" />
    </svg>
  );
}

function HeadphoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14a2 2 0 0 1 2-2h1v7H6a2 2 0 0 1-2-2v-3Z" />
      <path d="M20 14a2 2 0 0 0-2-2h-1v7h1a2 2 0 0 0 2-2v-3Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}

function ChevronIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}*/