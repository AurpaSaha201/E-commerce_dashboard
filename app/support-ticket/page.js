"use client";

import { useState } from "react";
import SupportForm from "@/components/SupportForm";
import SupportTable from "@/components/SupportTable";

export default function SupportTicketPage() {
  const [tickets, setTickets] = useState([
    {
      id: "#323534",
      name: "Lindsey Curtis",
      email: "demoemail@gmail.com",
      subject: "Issue with Dashboard Login Access",
      createDate: "12 Feb, 2027",
      status: "Solved",
    },
    {
      id: "#323535",
      name: "Kaiya George",
      email: "demoemail@gmail.com",
      subject: "Billing Information Not Updating Properly",
      createDate: "13 Mar, 2027",
      status: "Pending",
    },
    {
      id: "#323536",
      name: "Zain Geidt",
      email: "demoemail@gmail.com",
      subject: "Bug Found in Dark Mode Layout",
      createDate: "19 Mar, 2027",
      status: "Pending",
    },
    {
      id: "#323537",
      name: "Abram Schleifer",
      email: "demoemail@gmail.com",
      subject: "Request to Add New Integration Feature",
      createDate: "25 Apr, 2027",
      status: "Solved",
    },
    {
      id: "#323538",
      name: "Mia Chen",
      email: "mia.chen@email.com",
      subject: "Unable to Reset Password",
      createDate: "28 Apr, 2027",
      status: "Pending",
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");

  function addTicket(newTicket) {
    setTickets((prevTickets) => [
      ...prevTickets,
      newTicket,
    ]);//ager sob ticket rekhe notun ta add kora
  }

  const filteredTickets =
    activeFilter === "All"
      ? tickets
      : tickets.filter(
          (ticket) => ticket.status === activeFilter
        );//only activefilter show korbe

  return (
    <div className="space-y-6">
      <SupportForm onAddTicket={addTicket} />
      <SupportTable
        tickets={filteredTickets}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

    </div>
  );
}