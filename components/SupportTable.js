"use client";
import {Search,MoreHorizontal,} from "lucide-react";

export default function SupportTable({tickets,activeFilter,setActiveFilter,}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="p-5 border-b border-gray-200 flex items-center justify-between gap-5">
        <div> <h2 className="text-xl font-semibold text-[#101828]"> Support Tickets </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-xl p-1">

            <button onClick={() => setActiveFilter("All")} className={`px-5 py-2.5 rounded-lg text-sm font-medium ${
                activeFilter === "All"? "bg-white text-[#101828] shadow-sm" : "text-gray-500" }`}>
              All
            </button>

            <button
              onClick={() => setActiveFilter("Solved")}className={`px-5 py-2.5 rounded-lg text-sm font-medium ${
                activeFilter === "Solved" ? "bg-white text-[#101828] shadow-sm": "text-gray-500"}`}  >
              Solved
            </button>

            <button
              onClick={() => setActiveFilter("Pending")} className={`px-5 py-2.5 rounded-lg text-sm font-medium ${
                activeFilter === "Pending" ? "bg-white text-[#101828] shadow-sm" : "text-gray-500" }`}>
              Pending
            </button>
          </div>

          {/* Search */}
          <div className="relative w-[260px]">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="text" placeholder="Search..." className="w-full h-[48px] border border-gray-300 rounded-lg pl-11 pr-4 outline-none" />
          </div>

      
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="w-[55px] px-5 py-4"> <input type="checkbox" />  </th>
              <th className="text-left text-sm font-medium text-[#101828] py-4"> Ticket ID </th>
              <th className="text-left text-sm font-medium text-[#101828] py-4">  Requested By</th>
              <th className="text-left text-sm font-medium text-[#101828] py-4"> Subject  </th>
              <th className="text-left text-sm font-medium text-[#101828] py-4"> Create Date </th>
              <th className="text-left text-sm font-medium text-[#101828] py-4"> Status</th>
              <th className="w-[70px]"></th>
            </tr>
          </thead>

          
          <tbody>
            {tickets.map((ticket) => (
              <tr  key={ticket.id}  className="border-b border-gray-200 hover:bg-gray-50">
             <td className="px-5 py-5"> <input type="checkbox" /> </td>

           
                <td className="py-5 pr-5">
                  <span className="text-sm font-medium text-[#344054]">
                    {ticket.id}
                  </span>
                </td>

                
                <td className="py-5 pr-5 min-w-[230px]">
                  <p className="text-[15px] font-semibold text-[#101828]">
                    {ticket.name}
                  </p>

                  <p className="text-sm font-normal text-gray-500 mt-1">
                    {ticket.email}
                  </p>

                </td>

          
                <td className="py-5 pr-5 min-w-[350px]">
                  <span className="text-[15px] font-normal text-[#344054]">
                    {ticket.subject}
                  </span>

                </td>


                <td className="py-5 pr-5 whitespace-nowrap">
                  <span className="text-[15px] font-normal text-[#344054]">
                    {ticket.createDate}
                  </span>

                </td>

                {/* Status */}
                <td className="py-5">

                  <span
                    className={`
                      inline-flex px-3 py-1 rounded-full text-xs font-medium

                      ${
                        ticket.status === "Solved"
                          ? "bg-[#ecfdf3] text-[#039855]"
                          : "bg-[#fffaeb] text-[#dc6803]"
                      }
                    `}
                  >
                    {ticket.status}
                  </span>

                </td>

                {/* More */}
                <td className="py-5 text-center">
                  <button className="text-gray-500 hover:text-gray-800">
                    <MoreHorizontal size={20} />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}