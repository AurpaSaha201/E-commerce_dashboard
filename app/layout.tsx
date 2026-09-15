"use client";
import { useState } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body>
       <Sidebar open={sidebarOpen} />

      
        <div
          className={` min-h-screen transition-all duration-300
            ${sidebarOpen ? "ml-[315px]" : "ml-[100px]"}
          `}
        >

          <Navbar
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            sidebarOpen={sidebarOpen}
          />

          {/* Page Content */}
          <main className="pt-[85px] p-6">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}