"use client";

import { useState } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
/*import Sidebar from "@/components/Sidebar";*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className="bg-[#f9fafb]">

        {/* Sidebar 
        <Sidebar open={sidebarOpen} />

      
        <div
          className={`
            min-h-screen
            transition-all
            duration-300
            ${sidebarOpen ? "ml-[315px]" : "ml-[100px]"}
          `}
        >*/}

          {/* Navbar */}
          <Navbar
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          />

          {/* Page Content */}
          <main className="pt-[85px]">
            {children}
          </main>
{/*
        </div>*/}

      </body>
    </html>
  );
}